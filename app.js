const App = {
	data() {
		return {
			title: "Notes",
			input: {
				value: '',
				placeholder: 'Type ur note'
			},
			notes: ["task 1", "task 2", "task 3"],
			isElVisible: true
		};
	},
	mounted() {
		this.getNotes();
	},
	watch: {
		notes: {
			handler(updatedList) {
				localStorage.setItem("notes", JSON.stringify(updatedList));
			},
			deep: true,
		},
	},
	methods: {
		onSubmit() {
			this.notes.push(this.input.value);
			this.input.value="";
		},
		remove(index) {
			console.log(`note: ${index} has been removed`);
			this.notes.splice(index, 1);
		},
		getNotes() {
			const localNotes = localStorage.getItem("notes");
			if (localNotes) {
				this.notes = JSON.parse(localNotes);
			}
		},
		editNote(index) {
			this.notes.push(this.input.value);
			this.input.value=this.note;
			this.isElVisible = !isElVisible;
		}
	},
};

Vue.createApp(App).mount("#app");