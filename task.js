class Task {
    constructor(description, status) {
        this.description = description;
        this.status = status;
    }

    toString() {
        return `Task ${this.description} (${this.status})`;
    }
}

module.exports = Task;
