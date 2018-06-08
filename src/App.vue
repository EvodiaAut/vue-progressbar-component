<template>
  <div
    id="app"
  >
    <div class="my-5 container">
      <header class="pb-3 clearfix border-bottom">
        <ul
          class="nav float-right"
        >
          <li
            class="nav-item"
          >
            <a
              class="nav-link"
              href="https://github.com/EvodiaAut/vue-progressbar-component"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <h1 class="text-muted">vue-progressbar-component</h1>
        <p class="lead">
          [<a
            href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/"
            target="_blank">CSS GPU Animation</a>] Simple progressbar for vuejs
        </p>
        <div class="d-flex flex-wrap">
          <a
            href="https://www.npmjs.com/package/vue-progressbar-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/v/vue-progressbar-component.svg?style=for-the-badge"
              alt="vue-progressbar-component npm"
            >
          </a>
          <a
            href="https://github.com/EvodiaAut/vue-progressbar-component/blob/master/LICENSE.md"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge"
              alt="vue-progressbar-component license"
            >
          </a>
          <a
            href="https://www.npmjs.com/package/vue-progressbar-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/dt/vue-progressbar-component.svg?style=for-the-badge"
              alt="vue-progressbar-component npm"
            >
          </a>
        </div>
      </header>
      <main
        class="my-5"
        role="main"
      >
        <div
          class="row"
        >
          <div
            class="col-md-6 my-3"
          >
            <h4>Simple progressbar to 77%</h4>
            <p>Set a value <code>:value="77"</code></p>
            <progress-bar
              :value="77"
            />
            <h4
              class="my-3"
            >
              Change scale to Y
            </h4>
            <p>Set <code>:value="88" scale="Y" origin="bottom"</code></p>
            <progress-bar
              :value="88"
              scale="Y"
              origin="bottom"
              style="height:250px"
            />
          </div>
          <div
            class="col-md-6 my-3"
          >
            <h4>Bar class</h4>
            <p>Set <code>:value="65" bar-class="bg-info"</code></p>
            <progress-bar
              :value="65"
              bar-class="bg-success"
            />
            <h4
              class="my-3"
            >
              Transform Origin
            </h4>
            <p>Use <code>:value="95" origin="right"</code> for change transform origin</p>
            <progress-bar
              :value="95"
              origin="right"
            />
            <p
              class="my-3"
            >
              <code>:value="90" origin="center"</code>
            </p>
            <progress-bar
              :value="90"
              origin="center"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import ProgressBar from './components/ProgressBar'

  export default {
    name: 'App',
    components: {
      ProgressBar
    }
  }
</script>

<style lang="scss">
  /*
    ProgressBar
  */
  @import "scss/progressbar";

  /*
    Bootstrap
  */
  @import "~bootstrap/scss/bootstrap";
</style>
