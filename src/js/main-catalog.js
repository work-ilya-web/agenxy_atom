
gsap.to("*", {duration: 0.1})
const blockHover = document.querySelector('.hoverBlock');
const MenuHover = document.querySelector('.hoverMenu');

if (blockHover) {
    let clientX = -100;
    let clientY = -100;
    let index = 0
    let videos = document.querySelectorAll('.image');
    const render = () => {
      videos.forEach(video => {
        //video.style.transform = `translate(${clientX}px, ${clientY}px)`;
		TweenMax.to(video, {
			duration: .1, 
			x: clientX,
			y: clientY,
		});
      })
      requestAnimationFrame(render);
    };
    blockHover.addEventListener('mousemove', (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
        const hoverItem = e.target.closest('.hoverBlock__item');
        render()
        if (hoverItem) {
          const indexInner = hoverItem.dataset.index;
          index = indexInner
          videos[index].classList.add('active');
          videos[index].style.position = 'fixed';
        }

    })
    blockHover.addEventListener('mouseout', (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      const hoverItem = e.target.closest('.hoverBlock__item');
      if (hoverItem) {
        const indexInner = hoverItem.dataset.index;
        index = indexInner
        videos[index].classList.remove('active');
        videos[index].style.position = 'absolute';
      }
    })

  }

  if (MenuHover) {
    let clientX = -100;
    let clientY = -100;
    let menu = 0
    let images = document.querySelectorAll('.image-menu');
    const renderMenu = () => {
      images.forEach(image => {
        //image.style.transform = `translate(${clientX}px, ${clientY}px)`;
		TweenMax.to(image, {
			duration: .1, 
			x: clientX,
			y: clientY,
		});
      })
      requestAnimationFrame(renderMenu);
    };
    MenuHover.addEventListener('mousemove', (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
        const hoverItemMenu = e.target.closest('.hoverMenu__item');
        renderMenu()
        if (hoverItemMenu) {
          const menuInner = hoverItemMenu.dataset.menu;
          menu = menuInner
          images[menu].classList.add('active');
          images[menu].style.position = 'fixed';
        }

    })
    MenuHover.addEventListener('mouseout', (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      const hoverItemMenu = e.target.closest('.hoverMenu__item');
      if (hoverItemMenu) {
        const menuInner = hoverItemMenu.dataset.menu;
        menu = menuInner
        images[menu].classList.remove('active');
        images[menu].style.position = 'absolute';
      }
    })

  }
