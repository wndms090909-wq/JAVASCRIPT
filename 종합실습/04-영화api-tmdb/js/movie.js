//api키 저장
const API_KEY = "4b8091cd9b1b9ad42acd3e5037b6e706";
//장르 주소
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
//영화 주소
const MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
//버튼을 보여줄 영역
let genreButtons = document.querySelector(".genre-buttons");
//영화를 보여줄 영역
let movieList = document.querySelector(".movie-list");

//선택된 장르를 저장할 변수
let selectGe = 0;
//영화를 검색할 영역

//영화장르
let genres = [];
//영화목록
let movies = [];
//영화를 보여줄 렌더함수
function showMovie() {
    console.log("show", movies, selectGe);
    //화면 비우기
    movieList.innerHTML = "";
    //장르에 맞는 영화를 찾아서 저장할 배열
    let fillteredMovies = movies.filter(mov => {
        let matchGenre = selectGe === 0 || mov.genre_ids.includes(selectGe);
        return matchGenre;
    })
    console.log(fillteredMovies);
    //장르에 맞는 영화를 li안에
    //이미지, 제목, 별점을 표시할 태그를 만들어서 보여주기
    fillteredMovies.forEach(item => {
        let liItem = document.createElement("li");
        let imgSrc = `http://image.tmdb.org/t/p/w500${item.poster_path}`;
        liItem.innerHTML = `<div class="img-box"><img src="${imgSrc}" alt=""></div>
                             <div class="text-box">
                                <h3>${item.title}</h3>
                                <span>${item.vote_average}</span>
                            </div>
                             `
        movieList.append(liItem);
    })

}

//장르를 보여줄 렌더함수
function showGenres() {
    console.log(genres);

    //전체 추가하기
    genres[0] = "전체";

    //장르 버튼만들기
    genres.forEach((cat, id) => {
        let button = document.createElement("button");
        button.textContent = cat;
        button.setAttribute("data-genre", id);
        genreButtons.append(button);
    })

    //버튼 이벤트
    let buttons = genreButtons.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectGe = Number(btn.getAttribute("data-genre"));
            buttons.forEach(b => b.classList.remove("active"))
            btn.classList.add("active");
            showMovie(selectGe);
        })
    })

}

//장르를 가져올 초기함수
async function fetchGenres() {
    try {
        await fetch(GENRE_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.genres.forEach(ele => {
                    genres[ele.id] = ele.name;
                })

                showGenres();
            })

    } catch (err) {
        console.log("영화 장르 불러오기 실패", err);
    }
}

//영화를 가져올 초기함수
async function fetchMovie() {
    try {
        await fetch(MOVIE_URL)
            .then(res => res.json())
            .then(data => {
                console.log("영화목록", data);
                movies = data.results;
                showMovie();

            })
    } catch (err) {
        console.log("영화 불러오기 실패", err)
    }
}
//초기함수 호출
fetchGenres();
fetchMovie();
