function showFilter(filter, tags) {
	//var memberCounter = document.querySelector("#memberCounter");

	// Add the filter buttons, their html should be:
	// <button class="filter-button" onclick='onlyShow("Företag");'>Företag</button>
	_.forEach(tags, function(tag) {
		var pinne = document.createElement('span');
		pinne.innerHTML = " | ";
		filter.appendChild(pinne);
		var filterButton = document.createElement('button');
		filterButton.innerHTML = tag;
		filterButton.className = "filter-button";
		filterButton.onclick = function() { onlyShow(tag); };
		filter.appendChild(filterButton);
	});

	function randomizeOrder() {
		var members = document.getElementsByClassName("member");
		var shuffledMembers = _.shuffle(members);

		var memberList = document.querySelector(".member-list");
		memberList.innerHTML = "";

		_.map(shuffledMembers, function(member) {
			memberList.appendChild(member);
		});
	}

	randomizeOrder();

	function showAll() {
		var members = document.getElementsByClassName("member");
		_.map(members, function(member) {
			member.style.display = "block";
		});
	}

	function onlyShow(tagName) {
		var members = document.getElementsByClassName("member");
		_.map(members, function(member) {
			var tagDivs = member.getElementsByClassName("member-tag");
			var tagContents = _.map(tagDivs, function(tag) {
				return tag.innerHTML;
			});
			if(_.contains(tagContents, tagName)) {
				member.style.display = "block";
			} else {
				member.style.display = "none";
			}
		});
	}
}