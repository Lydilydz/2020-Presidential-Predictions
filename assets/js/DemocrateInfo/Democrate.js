$(".row").empty()

function compare(a, b) {
    if (a.text < b.text) {
        return -1;
    }
    if (a.text > b.text) {
        return 1;
    }
    return 0;
}
candidateList.sort(compare)
console.log(candidateList)

function textcolor(text) {
    if (text === "OUT") {
        return "red"
    } else {
        return "green"
    }
}
candidateList.forEach(function(candidate) {
    $(".row").append(
        `<div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div class="frontside">
                    <div class="card" >
                        <div class="card-body text-center">
                            <a href="${candidate.page}">
                                <p><img class=" img-fluid" src="${candidate.picture}"
                                        alt="card image"></p>
                            </a>
                            <h4 class="card-title">${candidate.name}</h4>
                            <p class="card-text ${textcolor(candidate.text)}">${candidate.text}</p>
                            <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    )
})