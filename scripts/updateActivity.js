const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/activity.json");
const logPath = path.join(__dirname, "../logs/activity.md");

const now = new Date();

const date = now.toISOString().split("T")[0];
const time = now.toISOString();

let data = [];

if (fs.existsSync(dataPath)) {
  data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

const activities = [
  "Updated automated project records",
  "Generated daily repository report",
  "Refreshed project activity data",
  "Performed scheduled repository maintenance",
  "Updated development activity log"
];

const activity =
  activities[Math.floor(Math.random() * activities.length)];

const entry = {
  date,
  time,
  activity
};

data.push(entry);

fs.writeFileSync(
  dataPath,
  JSON.stringify(data, null, 2)
);

let logContent = "# Daily Repository Activity\n\n";

data.slice(-100).reverse().forEach((item) => {
  logContent += `## ${item.date}\n`;
  logContent += `- ${item.activity}\n`;
  logContent += `- Timestamp: ${item.time}\n\n`;
});

fs.writeFileSync(logPath, logContent);

console.log(`Activity updated for ${date}`);