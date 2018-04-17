new Vue({
  el: "#notebook",

  data() {
    return {
      notes: [],
      selectedId: null
    }
  },

  computed: {
    notePreview() {
      return this.selectedNote ? marked(this.selectedNote.content) : " "
    },

    addButtonTitle() {
      return this.notes.length + " note(s) already";
    },

    selectedNote() {
      return this.notes.find(note => note.id === this.selectedId)
    }
  },

  methods: {
    reportOperation(opName) {
      console.log("The", opName, "operation was completed!");
    },

    addNote() {
      const time = Date.now();
      const note = {
        id: String(time),
        title: "New note " + (this.notes.length + 1),
        content: "**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!",
        created: time,
        favorite: false
      }
      this.notes.push(note);
    },

    selectNote(note) {
      return this.selectedId = note.id
    }
  }
});
