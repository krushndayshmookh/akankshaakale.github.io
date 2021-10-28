document.addEventListener('DOMContentLoaded', function () {
  const vm_nav = new Vue({
    el: '#nav',
    data: {
      backgroundClass: 'transparent',
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(event) {
        if (window.scrollY > 0) {
          this.backgroundClass = 'glass'
        } else {
          this.backgroundClass = 'transparent'
        }
      },
    },
  })
})
