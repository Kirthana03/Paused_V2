AFRAME.registerComponent('stg03-toggle',{
    init: function() {
        let el = this.el;
        var st2 = document.querySelector("#rig");
        pos = st2.getAttribute('position'); 
        posX = pos['x']; 
        posY = pos['y']; 
        posZ = pos['z'] - 2;
        this.togglestg03 = function() {
            console.log('clicked');
            el.setAttribute('position','0 2 -600'); 
            el.setAttribute('opacity','0');
            st2.setAttribute('animation', `property: position; to: ${posX} ${posY} ${posZ}; dir:alternate; dur:4000; loop:false`);
        }
        this.el.addEventListener('click',this.togglestg03);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.togglestg03);
    }
})
