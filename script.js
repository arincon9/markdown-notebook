new Vue({
  el: "#notebook",

  data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      selectedId: localStorage.getItem("selected-id") || null
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

  watch: {
    notes: {
      handler: "saveNotes",
      deep: true
    },
    selectedId (val) {
      localStorage.setItem("selected-id", val);
    }
  },

  methods: {

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
    },

    saveNotes() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
      console.log("Notes have been saved!", new Date());
    }

  }
});
