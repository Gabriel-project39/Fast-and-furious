.toggle-container {
    position: fixed;
    top: 20px;
    left: 20px;
    cursor: pointer;
}

.toggle-icon {
    font-size: 1.5em;
}

/* You might need to include font libraries for these icons */
/* For example, Font Awesome or a custom icon font */
.sun {
    color: gold;
}

.moon {
    color: #ddd;
    display: none; /* Initially hide the moon icon */
}

body.dark-mode .sun {
    display: none;
}

body.dark-mode .moon {
    display: inline;
}

h1 {
    margin-bottom: 20px;
}