<template>
  <div class="table">
    <div id="address-results">
      <div v-if="items.length > 1">
        <div id="provider-list">
          {{ message }}
          <transition-group
            name="providers"
            tag="div"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
          >
            <div
              v-for="(item, index) in computedList"
              v-bind:key="item.pid"
              v-bind:data-index="index"
              class="provider"
            >
              ({{ index }}) {{ item.name }} - {{ item.coverageId | coverage }} -
              {{ item.distance }}ft
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
Vue.config.debug = true;
Vue.config.devtools = true;
var reportedApi = [
  {
    name: "Xfinity by Comcast",
    tech: "Cable",
    pid: 1,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Charter",
    tech: "Fiber",
    pid: 2,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Spiral Communications",
    tech: "DSL",
    pid: 3,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Verizon Fios",
    tech: "Fiber",
    pid: 4,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Some Company",
    tech: "Fiber",
    pid: 5,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Some Company 2",
    tech: "Cable",
    pid: 6,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Some Company 3",
    tech: "Copper",
    pid: 7,
    coverageId: 6,
    distance: 300
  },
  {
    name: "Nick's Provider",
    tech: "Fiber",
    pid: 8,
    coverageId: 6,
    distance: 300
  }
];
var verifiedApi = [
  {
    pid: 1,
    coverageId: 3,
    distance: 700
  },
  {
    pid: 2,
    coverageId: 2,
    distance: 100
  },
  {
    pid: 3,
    coverageId: 1,
    distance: 0
  }
];
var calculatedApi = [
  {
    pid: 4,
    coverageId: 4,
    distance: 400
  },
  {
    pid: 5,
    coverageId: 4,
    distance: 299
  },
  {
    pid: 6,
    coverageId: 5,
    distance: 700
  },
  {
    pid: 7,
    coverageId: 5,
    distance: 700
  },
  {
    pid: 8,
    coverageId: 4,
    distance: 300
  }
];
export default {
  name: "ContentTable",
  props: {
    msg: String
  },
  data: {
    message: "Loading...",
    items: []
  },
  computed: {
    computedList: function() {
      var vm = this;
      return _.sortBy(vm.items, ["coverageId"]);
    }
  },
  filters: {
    coverage: function(id) {
      switch (id) {
        case 1:
          return "lit";
        case 2:
          return "near net - verified";
        case 3:
          return "far net - verified";
        case 4:
          return "near net - computed";
        case 5:
          return "far net - computed";
        case 6:
          return "reported";
      }
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 100;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
setTimeout(function() {
  test.items = _.concat(reportedApi, test.items);
  test.message = "Loading Verified...";
}, 1500);
setTimeout(function() {
  test.items = updateCoverage(test.items, verifiedApi);
  test.message = "Loading Calculated...";
}, 3000);
setTimeout(function() {
  test.items = updateCoverage(test.items, calculatedApi);
  test.message = "Loading Complete";
}, 5000);
setTimeout(function() {
  test.message = "";
}, 6500);
var updateCoverage = function(obj1, obj2) {
  var updated = [];
  _.map(obj1, function(obj1) {
    _.map(obj2, function(obj2) {
      if (obj1.pid == obj2.pid) {
        obj1.coverageId = obj2.coverageId;
        obj1.distance = obj2.distance;
      }
    });
    updated.push(obj1);
  });
  return updated;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.providers-move {
  transition: transform 1.2s;
}
#json {
  position: absolute;
  top: 1px;
  right: 1px;
  background: #eee;
  padding: 2rem;
  max-width: 300px;
  font-size: 9px;
}

#address-results {
  width: 400px;
  margin: 10% auto 0;
  padding: 10px;
  background: #f1f1f1;
  border: 1px solid #ddd;
}

.provider {
  padding: 10px;
  margin-bottom: 10px;
  background: white;
}
</style>
