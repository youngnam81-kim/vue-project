<template>
  
    <div 
      class="tree-item" 
      @click="toggleChildren"
      :class="{ 'has-children': item.children && item.children.length }"
    >
      <span class="tree-icon" v-if="item.children && item.children.length">
        {{ isOpen ? '▼' : '►' }}
      </span>
      <span v-else class="tree-indent"></span>
      <router-link 
        :to="item.path" 
        @click.stop="navigateTo(item)"
      >
        {{ item.label }}
      </router-link>
    </div>
    <div v-if="isOpen && item.children" class="tree-children">
      <tree-menu
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :depth="depth + 1"
        @navigate="$emit('navigate', $event)"
      ></tree-menu>
    </div>
  
</template>

<script>
export default {
  name: 'TreeMenu',
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleChildren(event) {
      if (this.item.children && this.item.children.length) {
        this.isOpen = !this.isOpen;
      }
    },
    navigateTo(item) {
      this.$emit('navigate', item);
    }
  }
}
</script>

<style scoped>
.tree-menu {
  text-align: left;
}

.tree-item {
  padding: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.tree-icon {
  margin-right: 5px;
  width: 15px;
  display: inline-block;
  font-size: 10px;
}

.tree-indent {
  width: 15px;
  display: inline-block;
}

.tree-children {
  padding-left: 20px;
}

.has-children {
  font-weight: bold;
}
</style>