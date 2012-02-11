$(function() {
    $('#toggle-spread').click(function() {
        $('.picture-collection-container').toggleClass('spread-4');;
    });

    $('input[type=radio]').change(function() {
        var id = this.id;
        var name = this.name;
        var form = this.form;
        if(!form) return;
        var checked = this.checked;
        var all = $('input[name='+name+']', form);
        all.each(function() {
            var id = this.id;
            $('label[for='+id+']', form).removeClass('active');
        });
        $('label[for='+id+']', form).addClass('active');
    });

    $('input[type=checkbox]').change(function() {
        var id = this.id;
        var form = this.form;
        var checked = this.checked;
        if(!form) return;
        $('label[for='+id+']')[checked ? 'addClass':'removeClass']('active');
    })

    $('input[type=text]').addPlaceholder();
})
