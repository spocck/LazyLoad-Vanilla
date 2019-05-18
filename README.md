## LazyLoad Vanilla


-LazyLoad feito em Vanilla com IntersectionObserver.

## Como usar

-Invez de colocarmos a imagem no src, usasse o data-lazy.

    // Exemplo //
- <div class="rr-lazyload">
     <img data-lazy="https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300" />
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
