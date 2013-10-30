;(function( $ ){
    "use strict";

    /**
     * jQuery Ui Step Wizard Widget
     * @author <a href="http://stevenweathers.com">Steven Weathers</a>
     * @version 2.1.1
     * @requires jQuery
     * @requires jQuery UI Core
     * @requires jQuery UI Widget
     * @example $('.ui-step-wizard').stepWizard();
     */
    $.widget( "ui.stepWizard", {
        options : {
            /**
             * The Step Classname
             * @type {String}
             */
            stepClass: 'ui-step',
            /**
             * The Active Step Classname
             * @type {String}
             */
            activeStepClass: 'ui-step-active',
            /**
             * The Step Header Classname
             * @type {String}
             */
            stepHeaderClass: 'ui-step-header',
            /**
             * The Step Container Classname
             * @type {String}
             */
            stepContainerClass: 'ui-step-container',
            /**
             * The Previous Button Classname
             * @type {String}
             */
            prevBtnClass: 'ui-step-previous',
            /**
             * The Next Button Classname
             * @type {String}
             */
            nextBtnClass: 'ui-step-next',
            /**
             * Whether or not modify (clicking header of a step to jump to it) is allowed
             * @type {Boolean}
             */
            modifyAllowed: true,
            /**
             * If modifyAllowed is true, this controls whether or not the direction allowed
             * is forward (previous steps), backward (next steps), or both (previous and next steps)
             * @type {String}
             */
            modifyDirection: 'both'
        },
        /**
         * Bind the User Interface
         */
        _bindUi: function() {
            // bind the previous button
            $( this.element ).on( 'click.stepPrev', '.'+this.options.prevBtnClass, $.proxy( this.prev, this ) );
            // bind the next button
            $( this.element ).on( 'click.stepNext', '.'+this.options.nextBtnClass+':not(:disabled)', $.proxy( this.next, this ) );
            // bind the step header
            $( this.element ).on( 'click.stepHeader', '.'+this.options.stepHeaderClass, $.proxy( function( event ){
                var target = $( event.target ).parent( '.'+this.options.stepClass ),
                    currentStep = this.element.find( '.'+this.options.activeStepClass );

                // check if step modify (header click) is allowed before we proceed
                // if so check the allowed directions
                // then if the target direction is allowed call the modify method
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
        /**
         * Create the widget
         * @todo Add support for setting active step on init
         */
        _create : function() {
            // find the first step and add the active class
            // find the container inside the step and show it
            this.element
                .find( '.'+this.options.stepClass )
                .filter(':first')
                .addClass( this.options.activeStepClass )
                .find( '.'+this.options.stepContainerClass )
                .toggle();

            this._bindUi();
        },
        /**
         * Set Option on Widget
         * @param {String} key   The key of the option
         * @param {String|bolean|number} value The value of the option
         */
        _setOption: function( key, value ) {
            $.Widget.prototype._setOption.apply( this, arguments );
        },
        /**
         * Destroy the Widget
         */
        destroy: function() {
            $.Widget.prototype.destroy.call( this );
        },
        /**
         * Change the Current Step to the Target Step
         * @param  {Selector} current The current step element
         * @param  {Selector} target  The target step element
         */
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
        /**
         * Change to the previous step if one exists
         */
        prev: function() {
            var currentStep = this.element.find( '.'+this.options.activeStepClass ),
                prevStep = currentStep.prev( '.'+this.options.stepClass );

            if ( prevStep.length ) { this._stepChange( currentStep, prevStep ); }
        },
        /**
         * Change to the next step if one exists
         */
        next: function() {
            var currentStep = this.element.find( '.'+this.options.activeStepClass ),
                nextStep = currentStep.next( '.'+this.options.stepClass );

            if ( nextStep.length ) { this._stepChange( currentStep, nextStep ); }
        },
        /**
         * Change to the target step
         */
        modify: function( target ){
            var currentStep = this.element.find( '.'+this.options.activeStepClass );

            this._stepChange( currentStep, target );
        },
        /**
         * Toggle the button to either enabled or disabled state
         * @param  {String} action enable or disable the buggon
         */
        toggleButton: function( action ) {
            var nextButton = this.element.find( '.'+this.options.activeStepClass ).find( '.'+this.options.nextBtnClass );

            // check if the action is enabled, if so remove the disabled attribute
            // else set the disabled attribute to disabled
            if ( action === 'enable' ) {
                $( nextButton ).removeAttr( 'disabled' );
            } else {
                $( nextButton ).attr( 'disabled','disabled' );
            }
        }
    });
}( jQuery ));