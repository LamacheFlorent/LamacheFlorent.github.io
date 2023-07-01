const app = {
    init: function(){
        console.log('app.init');
        effect.init();
    },
}
document.addEventListener('DOMContentLoaded', app.init);