## LazyLoad Vanilla

-LazyLoad feito em Vanilla com IntersectionObserver.

## Como usar


      <div class="rr-lazyload">
          <img data-lazy="Your-Image.png" />
      </div>

-Você pode animar também estilizando a class .rr-show


### CSS

    img{
    opacity: 0;
    transform: scale(0);
    transition: all .3s linear;
     }
    .rr-show{
    transform: scale(1);
    opacity: 1;
    }


