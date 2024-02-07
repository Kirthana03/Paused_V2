AFRAME.registerComponent('opacity-toggle',{
    init: function() {
        let el = this.el;
        let varPos = el.getAttribute('position'); 
        let varPosX = varPos['x']; 
        let varPosY = varPos['y'] + 20; 
        let varPosZ = varPos['z'];
        // var st2 = document.querySelector("#rig");
        // pos = st2.getAttribute('position'); 
        // posX = pos['x']; 
        // posY = pos['y']; 
        // posZ = pos['z']; 

        this.toggleState = function() {
            console.log('clicked');
            // el.setAttribute('position','0 2 -60'); 
            // el.setAttribute('animation', 'property: scale; from:1 1 1; to: 0 0 0; dur:2000; loop:false');
            el.setAttribute('animation', `property: position; to: 0 ${varPosY} ${varPosZ}; dur:2000; loop:false`);
            // st2.setAttribute('animation', `property: position; to: ${posX} ${posY} ${posZ}; dir:alternate; dur:4000; loop:false`);
            // el.components.sound.stopSound();
            // st2.components.sound.playSound();
        }
        this.el.addEventListener('click',this.toggleState);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleState);

    }
})
