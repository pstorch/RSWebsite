
function toDate(timestamp) {
    if (timestamp !== undefined) {
        var date = new Date(0);
        date.setUTCSeconds(timestamp / 1000);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString()
    }
    return "";
}

function updateFdroidBuildStatus() {
    if (error !== "") {
        alert(error);
        return;
    }
    if (fdroidBuildStatus !== "") {
        document.getElementById("startTime").innerHTML = toDate(fdroidBuildStatus.startTimestamp);
        document.getElementById("endTime").innerHTML = toDate(fdroidBuildStatus.endTimestamp);    
        document.getElementById("successCount").innerHTML = fdroidBuildStatus.successfulBuilds.length;
        document.getElementById("failCount").innerHTML = fdroidBuildStatus.failedBuilds.length;
    }
}

function search() {
    document.getElementById("result").innerHTML = "Not Found";
    var package = document.getElementById("search").value;
    let failed = fdroidBuildStatus.failedBuilds.find(function(item, index, array) {
        if (item[0] == package) {
            return true;
        }
      });
    
    if (failed !== undefined) {
        document.getElementById("result").innerHTML = "Failed";
    }

    let success = fdroidBuildStatus.successfulBuilds.find(function(item, index, array) {
        if (item.id == package) {
            return true;
        }
      });
    
    if (success !== undefined) {
        document.getElementById("result").innerHTML = "Success";
    }
}

document.addEventListener("DOMContentLoaded", updateFdroidBuildStatus);
