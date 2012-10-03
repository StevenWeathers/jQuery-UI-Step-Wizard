jQuery-UI-Step-Wizard
=====================

jQuery UI Widget Factory powered Step Wizard

###Using Step Wizard
Enable via javascript:
```javascript
$('.ui-step-wizard').stepWizard();
```

###Markup
The HTML is flexible through options passed to the wizard instantiation<br />
This allows for more control over both appearance and functionality
```html
<div class="ui-step-wizard">
    <div class="ui-step">
        <div class="ui-step-header">
            <span class="ui-step-number">1</span>
            <h5 class="ui-step-title">Step Title</h5>
        </div>
        <div class="ui-step-container">
            <div class="ui-step-content">
                <p>Step Content Here</p>
            </div>
            <div class="ui-step-controls">
                <!--<button class="btn ui-step-previous">Previous</button>-->
                <button class="btn btn-primary ui-step-next">Next</button>
            </div>
        </div>
    </div>
    <div class="ui-step">
        <div class="ui-step-header">
            <span class="ui-step-number">2</span>
            <h5 class="ui-step-title">Step Title</h5>
        </div>
        <div class="ui-step-container">
            <div class="ui-step-content">
                <p>Step Content Here</p>
            </div>
            <div class="ui-step-controls">
                <button class="btn ui-step-previous">Previous</button>
                <button class="btn btn-primary ui-step-next">Next</button>
            </div>
        </div>
    </div>
    <div class="ui-step">
        <div class="ui-step-header">
            <span class="ui-step-number">3</span>
            <h5 class="ui-step-title">Step Title</h5>
        </div>
        <div class="ui-step-container">
            <div class="ui-step-content">
                <p>Step Content Here</p>
            </div>
            <div class="ui-step-controls">
                <button class="btn ui-step-previous">Previous</button>
                <button class="btn btn-primary ui-step-next">Next</button>
            </div>
        </div>
    </div>
    <div class="ui-step">
        <div class="ui-step-header">
            <span class="ui-step-number">4</span>
            <h5 class="ui-step-title">Step Title</h5>
        </div>
        <div class="ui-step-container">
            <div class="ui-step-content">
                <p>Step Content Here</p>
            </div>
            <div class="ui-step-controls">
                <button class="btn ui-step-previous">Previous</button>
                <button class="btn btn-success ui-step-finish">Finish</button>
            </div>
        </div>
    </div>
</div>
```

###Methods
**.stepWizard(options)**
Activates your content as a step wizard. Accepts an optional options object.
```javascript
$('.ui-step-wizard').stepWizard({
  stepClass: 'ui-step'
});
```

**.stepWizard( 'toggleButton' );**<br />
Toggles the current step's button state (disabled).

**.stepWizard( 'toggleButton', 'enable' );**<br />
Toggles the current step's button state (enabled).

**.stepWizard( 'next' );**<br />
Gets the current step and moves to the next step.

**.stepWizard( 'prev' );**<br />
Gets the current step and moves to the previous step.

**.stepWizard( 'modify', $(target) );**<br />
Gets the current step and moves to the target step.

###Options
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>activeStepClass</td>
        <td>css classname</td>
        <td>ui-step-active</td>
        <td>Class used on the current active step, class name only not selector</td>
    </tr>
    <tr>
        <td>stepClass</td>
        <td>css classname</td>
        <td>ui-step</td>
        <td>Class used on each step's main element, class name only not selector</td>
    </tr>
    <tr>
        <td>stepHeaderClass</td>
        <td>css classname</td>
        <td>ui-step-header</td>
        <td>Class used on each step's header element that houses the title/number and acts as an accordian header, class name only not selector</td>
    </tr>
    <tr>
        <td>stepContainerClass</td>
        <td>css classname</td>
        <td>ui-step-container</td>
        <td>Class used on each step's container element that houses the content and actions, class name only not selector</td>
    </tr>
    <tr>
        <td>prevBtnClass</td>
        <td>css classname</td>
        <td>ui-step-previous</td>
        <td>Class used on each step's previous button, class name only not selector</td>
    </tr>
    <tr>
        <td>nextBtnClass</td>
        <td>css classname</td>
        <td>ui-step-next</td>
        <td>Class used on each step's next button, class name only not selector</td>
    </tr>
    <tr>
        <td>modifyAllowed</td>
        <td>true/false bolean</td>
        <td>true</td>
        <td>Enable/Disable the header click to modify step functionality</td>
    </tr>
    <tr>
        <td>modifyDirection</td>
        <td>string: both, forward, or backward</td>
        <td>both</td>
        <td>When Modify is allowed controls which direction the user may step</td>
    </tr>
    </tbody>
</table>