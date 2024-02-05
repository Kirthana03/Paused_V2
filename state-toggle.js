AFRAME.registerComponent('state-toggle',{
    init: function() {
        let el = this.el;
        var back = document.querySelector("#back");
        this.toggleState = function() {
            console.log('clicked');
            el.setAttribute('position','0 2 -600'); 
            el.setAttribute('opacity','0');
            back.setAttribute('opacity','1');
            el.components.sound.stopSound();
            // st2.components.sound.playSound();
        }
        this.el.addEventListener('click',this.toggleState);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleState);

    }
})
