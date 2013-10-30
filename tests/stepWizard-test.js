module('jQuery UI Step Wizard',{
    setup: function(){
        jQuery.fx.off = true;
        $('.ui-step-wizard').stepWizard();
    },
    teardown: function(){
        $('.ui-step-wizard').stepWizard("destroy");
    }
});
test("disable button", function(){
    expect(1);
    $('.ui-step-wizard').stepWizard('toggleButton');

    deepEqual( $('.ui-step-active .ui-step-next').is(':disabled'), true, 'Next button is disabled' );
});
test("enable button", function(){
    expect(1);
    $('.ui-step-wizard').stepWizard('toggleButton');
    $('.ui-step-wizard').stepWizard('toggleButton','enable');

    deepEqual( $('.ui-step-active .ui-step-next').is(':disabled'), false, 'Next button is enabled' );
});
test("step next", function(){
    expect(1);
    $('.ui-step-wizard').stepWizard('next');

    deepEqual( $('.ui-step-active').index(), 1, 'Second Step is Active' );
});
test("step previous", function(){
    expect(1);
    $('.ui-step-wizard').stepWizard('next');
    $('.ui-step-wizard').stepWizard('prev');

    deepEqual( $('.ui-step-active').index(), 0, 'First Step is Active' );
});
test("step modify", function(){
    expect(1);
    $('.ui-step-wizard').stepWizard('next');
    $('.ui-step:nth-child(3) .ui-step-header').trigger('click');

    deepEqual( $('.ui-step-active').index(), 2, 'Third Step is Active' );
});
test("step header click backward only", function(){
    expect(2);
    $('.ui-step-wizard').stepWizard({ modifyAllowed: true, modifyDirection: 'backward' });
    $('.ui-step-wizard').stepWizard('next');

    $('.ui-step:nth-child(3) .ui-step-header').trigger('click');
    deepEqual( $('.ui-step-active').index(), 1, 'Second Step is Active' );
    $('.ui-step:nth-child(1) .ui-step-header').trigger('click');
    deepEqual( $('.ui-step-active').index(), 0, 'First Step is Active' );
});
test("step header click forward only", function(){
    expect(2);
    $('.ui-step-wizard').stepWizard({ modifyAllowed: true, modifyDirection: 'forward' });
    $('.ui-step-wizard').stepWizard('next');
    
    $('.ui-step:nth-child(1) .ui-step-header').trigger('click');
    deepEqual( $('.ui-step-active').index(), 1, 'Second Step is Active' );
    $('.ui-step:nth-child(3) .ui-step-header').trigger('click');
    deepEqual( $('.ui-step-active').index(), 2, 'Third Step is Active' );
});
test("step header click disabled", function(){
    expect(1);
    $('.ui-step-wizard').stepWizard({ modifyAllowed: false });
    $('.ui-step-wizard').stepWizard('next');
    $('.ui-step:first .ui-step-header').trigger('click');

    deepEqual( $('.ui-step-active').index(), 1, 'Second Step is Active' );
});