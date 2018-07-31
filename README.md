# DummyTour
Generador sencillo de Tours para Webs hecho en js.

# Como utilizarlo
El uso es muy sencillo y se ve con un simple ejemplo:

```
var tour = new dummytour([
    {
        'selector': '#mi_div .lo_que_sea',
        'position': 'right',
        'title': 'Lorem Ipsum',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi enim tempore voluptatibus id quasi repudiandae. Reiciendis illum id accusamus aliquid pariatur facilis, vitae, eum similique numquam libero, sint velit!',
        'button': 'Siguiente',
        'margin': 50,
        'transition': 1000
    },
    {
        'selector': '#mi_div_segundo',
        'position': 'bottom',
        'title': 'Lorem Ipsum',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi enim tempore voluptatibus id quasi repudiandae. Reiciendis illum id accusamus aliquid pariatur facilis, vitae, eum similique numquam libero, sint velit!',
        'button': 'Finalizar',
        'margin': 20
    }
]);

tour.run();
```
