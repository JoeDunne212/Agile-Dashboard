const express = require('express')

app.get("https://jd2002.atlassian.net/jira/api/2/issue", (req, res) => {
    res.json(
        { text: 'Do all exercises!', id: 'g3' });
});