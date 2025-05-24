fetch("metadata.json")
.then(response => response.json())
.then(data => {
  console.log("model.json：", data);
});
