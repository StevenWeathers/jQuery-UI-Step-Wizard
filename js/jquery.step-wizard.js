/**
 * jQuery Step Wizard
 * @author <a href="http://stevenweathers.com">Steven Weathers</a>
 * @version 2.1
 * @requires jQuery, jQuery UI Core, jQuery UI Widget
 */
;(function( $ ){
    "use strict";
    $.widget( "ui.stepWizard", {
        options : {
            stepClass: 'ui-step',
            activeStepClass: 'ui-step-active',
            stepHeaderClass: 'ui-step-header',
            stepContainerClass: 'ui-step-container',
            prevBtnClass: 'ui-step-previous',
            nextBtnClass: 'ui-step-next',
            modifyAllowed: true,
            modifyDirection: 'both'
        },
        _bindUi: function() {
            $( this.element ).on( 'click.step', '.'+this.options.prevBtnClass, $.proxy( this.prev, this ) );
            $( this.element ).on( 'click.step', '.'+this.options.nextBtnClass+':not(:disabled)', $.proxy( this.next, this ) );
            $( this.element ).on( 'click.step', '.'+this.options.stepHeaderClass, $.proxy( function( event ){
                var target = $( event.target ).parent( '.'+this.options.stepClass ),
                    currentStep = this.element.find( '.'+this.options.activeStepClass );

                if ( this.options.modifyAllowed === true ){
                    if( this.options.modifyDirection  === 'both' ) {
                        this.modify( target );
                    } else if ( this.options.modifyDirection  === 'backward' && target.index() < currentStep.index() ) {
                        this.modify( target );
                    } else if ( this.options.modifyDirection  === 'forward' && target.index() > currentStep.index() ) {
                        this.modify( target );
                    }
                }
            }, this ));
        },
        _create : function() {
            this.element
                .find( '.'+this.options.stepClass )
                .filter(':first')
                .addClass( this.options.activeStepClass )
                .find( '.'+this.options.stepContainerClass )
                .toggle();

            this._bindUi();
        },
        _setOption: function( key, value ) {
            $.Widget.prototype._setOption.apply( this, arguments );
        },
        destroy: function() {
            $.Widget.prototype.destroy.call( this );
        },
        _stepChange: function( current, target ){
            $( current ).find( '.'+this.options.stepContainerClass )
                        .slideUp()
                        .promise()
                        .done( $.proxy( function () {
                            $( current ).toggleClass( this.options.activeStepClass );
                            $( target ).toggleClass( this.options.activeStepClass );
                            $( target ).find( '.'+this.options.stepContainerClass ).slideDown();
                        }, this ));
        },
        prev: function() {
            var currentStep = this.element.find( '.'+this.options.activeStepClass ),
                prevStep = currentStep.prev( '.'+this.options.stepClass );

            if ( prevStep.length ) { this._stepChange( currentStep, prevStep ); }
        },
        next: function() {
            var currentStep = this.element.find( '.'+this.options.activeStepClass ),
                nextStep = currentStep.next( '.'+this.options.stepClass );

            if ( nextStep.length ) { this._stepChange( currentStep, nextStep ); }
        },
        modify: function( target ){
            var currentStep = this.element.find( '.'+this.options.activeStepClass );

            this._stepChange( currentStep, target );
        },
        toggleButton: function( action ) {
            var nextButton = this.element.find( '.'+this.options.activeStepClass ).find( '.'+this.options.nextBtnClass );

            if ( action === 'enable' ) {
                $( nextButton ).removeAttr( 'disabled' );
            } else {
                $( nextButton ).attr( 'disabled','disabled' );
            }
        }
    });
}( jQuery ));