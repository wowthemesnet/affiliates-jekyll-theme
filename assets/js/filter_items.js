// File path where integrations/extensions/use cases are listed
const file_path = '/affiliates-jekyll-test-site/assets/js/integrations.json';

// Create VueJS app to load `integrations.json` and allow filtering by name/tag
var app = new Vue({
    el: "#app",
    delimiters: ['[[', ']]'],
    data: {
        all_items: [],
        search_text: '',
        sort_name: true,
        search_text: '',
        search_tags: [],
        tag_text: '',
        tag_dropdown_open: false,
        tag_options: [],
        tag_options_filtered: [],
        tag_options_available: [],
        popoverShow: false,
        popoverHide: true,
        radio_group_value: 'all'
    },
    computed: {
        filteredItems() {
        items = this.all_items;
        return items.filter(c => {
            if(this.search_text == '') return true;
            return ( c.name.toLowerCase().indexOf(this.search_text.toLowerCase()) >= 0 );
        })
        },
        tagFilteredItems() {
        items = this.filteredItems;
        return items.filter(c => {
            if(this.search_tags.length == 0) return true;
            return ( this.search_tags.every(v => c.tags.includes(v)) );
        })
        },
        sortedItems() {
        items = this.tagFilteredItems;
        if (this.sort_name) {
            sorted = subdatasets.sort((a,b) => (a.name > b.name ? 1 : -1))
        } else {
            sorted = subdatasets.sort((a,b) => (a.name < b.name ? 1 : -1))
        }
        return sorted
        },
    },
    methods: {
      getJSONblob(file) {
        var app = this;
        var rawFile = new XMLHttpRequest();
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    app.all_items = JSON.parse(allText);
                } else if (rawFile.status === 404) {
                  router.push({ name: '404'})
                } else {
                  // TODO: figure out what to do here
                }
            }
        }
        rawFile.open("GET", file, false);
        rawFile.send();
      },
      collateTags(all_items) {
        all_tags = [];
        for (let i = 0; i < all_items.length; i++) {
            for (let j = 0; j < all_items[i].tags.length; j++) {
                current_tag = all_items[i].tags[j];
                if(all_tags.indexOf(current_tag) === -1) {
                    all_tags.push(current_tag);
                }
            }
        }
        return all_tags
      },
      addSearchTag(option) {
        this.radio_group_value = false;
        this.search_tags.push(option);
        this.clearSearchTagText();
        this.filterTags();
      },
      removeSearchTag(tag) {
        idx = this.search_tags.indexOf(tag);
        if (idx > -1) {
          this.search_tags.splice(idx, 1);
        }
        this.filterTags();
      },
      clearSearchTagText() {
        this.tag_text = '';
        this.filterTags();
        this.popoverShow = false
        this.popoverHide = true;
      },
      filterTags() {
        this.tag_options_available = this.tag_options.filter(x => this.search_tags.indexOf(x)===-1);
        this.tag_options_filtered  = this.tag_options_available.filter(str => str.indexOf(this.tag_text) >= 0);
      },
      inputTagText() {
        this.popoverShow = true;
        this.popoverHide = false;
        this.filterTags();
      },
      selectRadioButton() {
        val = this.radio_group_value;
        console.log(val)

        if (val == 'all'){
          this.search_tags = [];
          this.filterTags();
        }
        else if (val == 'integration'){
          this.search_tags = ['integration'];
          this.filterTags();
        }
        else if (val == 'extension'){
          this.search_tags = ['extension'];
          this.filterTags();
        }
        else if (val == 'academic'){
          this.search_tags = ['academic'];
          this.filterTags();
        }
      },
    },
    beforeMount(){
      this.getJSONblob(file_path)
      this.tag_options = this.collateTags(this.all_items)
    },
    mounted(){
      this.tag_options_filtered = this.tag_options;
      this.tag_options_available = this.tag_options;
    }

});
