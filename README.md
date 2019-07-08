## Vanilla LazyLoad

-LazyLoad made in Vanilla with IntersectionObserver.

## How to use


    <div class = "rr-lazyload">
    <img data-lazy = "{{your-image}}" />
    </ div>


-You can animate, stylizing the class .rr-show


### CSS

    img {
    opacity: 0;
    transform: scale (0);
    transition: all linear .3s;
    }
    .rr-show {
    transform: scale (1);
    opacity: 1;
    }
