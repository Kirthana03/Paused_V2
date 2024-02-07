AFRAME.registerComponent('seq-toggle',{
    init: function() {
        let el = this.el;
        var st2 = document.querySelector("#rig");
        pos = st2.getAttribute('position'); 
        posX = pos['x']; 
        posY = pos['y']; 
        posZ = pos['z'] - 1;
        
        this.toggleSeq = function() {
            console.log('clicked');
            st2.setAttribute('animation', `property: position; to: ${posX} ${posY} ${posZ}; dir:alternate; dur:4000; loop:false`);
        }
        this.el.addEventListener('click',this.toggleSeq);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleSeq);

    }
})
