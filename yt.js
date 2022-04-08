const [like_line, dislike_line, like_fill, dislike_fill] = [
  "https://i.imgur.com/KpIEFw9.png",
  "https://i.imgur.com/NM4kzw5.png",
  "https://i.imgur.com/LErD1To.png",
  "https://i.imgur.com/fu6vqp2.png"
];
const icons = "https://imgur.com/a/b669Hgk";
// window.location.href.replace('https://www.youtube.com/watch?v=','').slice(0,11)

// let API3 = "AIzaSyBaxE1HJ5bdnxFI8GwTTTdRyGWjXDqq32Q";
let API = "AIzaSyCBbmQExzrQjPtEQ8pDKiLOlyB89qqKFnc";

export default function Yt() {
  // let video2 = "XWtDoBgsumE";
  // let video = "8Ysr9B6l0jE";
  let video = "jNQXAC9IVRw";
  // let video3 = "HCS_Nxo23X0";
  let order = "relevance";
  let part = "snippet,replies";
  let [url, setUrl] = useState("");
  // let url2 = `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.commentThreads.list?part=${part}&videoId=${video}`;
  let max = "20";
  let token = "";

  useEffect(() => {
    setUrl(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=${part}&maxResults=${max}${
        token === "" ? "" : `&pageToken=${token}`
      }&key=${API}&order=${order}&videoId=${video}`
    );
  }, [video, order, part, max, token]);

  let [vid, setVid] = useState("");

  useEffect(() => {
    if (typeof localStorage.getItem(`comments-${video}`) === "string") {
      setVid(get(`comments-${video}`));
      console.log("local Storage");
    } else {
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log("dddd", data);
          set(`comments-${video}`, data);
          if (typeof localStorage.toBeDeleted === "undefined") {
            set("toBeDeleted", [`comments-${video}`]);
          } else {
            var del = get("toBeDeleted");
            del.push(`comments-${video}`);
            set("toBeDeleted", del);
          }
          setVid(data);
        });
    }
  }, [url, video]);

  return (
    <>
      <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js" />

      <Del />
      {vid === ""
        ? ""
        : vid.items.map((data) => (
            <Comment
              key={data.id}
              id={data.id}
              data={data.snippet.topLevelComment.snippet}
              top={data.snippet}
              reply={data}
            ></Comment>
          ))}
    </>
  );
}

const Comment = ({ data, top, reply, id }) => {
  const channel = `https://youtube.com/channel/${data.authorChannelId.value}`;
  return (
    <>
      <div className={'content'}>
        <div className={'imgdiv'}>
          <a href={channel}>
            <img
              className={'img'}
              width={40}
              height={40}
              alt={data.authorDisplayName}
              src={data.authorProfileImageUrl}
              '{{' borderRadius: "50%" }}
            />
          </a>
        </div>
        <div className={'data'}>
          <div className={'name'}>
            <a href={channel}>
              <span>{data.authorDisplayName}</span>
            </a>
          </div>
          <div className={'comment'}>
            <span dangerouslySetInnerHTML={{ __html: data.textDisplay }}></span>
          </div>
          <div className={'buttons'}>
            <div className={'reply_hidden'}>
              <img src={like_line} width={20} height={20} alt="like" />
              <span className={'liketext'}>{data.likeCount}</span>
            </div>
            <div className={'dislike'}>
              <img src={dislike_line} width={20} height={20} alt="dislike" />
            </div>
            {/* <div className={'reply'}>
            <Image src={cOMMENT} width={20} height={20} alt="like" />
            <span className={'liketext'}>{top.totalReplyCount}</span>
          </div> */}
          </div>
          {/* {top.totalReplyCount > 0
          ? reply.replies.comments.map((d) => <Replies key={d.id} data={d} />)
          : ""} */}
          {top.totalReplyCount > 0 ? (
            <Reply id={id} number={top.totalReplyCount} />
          ) : (
            ""
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

const Reply = ({ number, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleReply = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <div className={'show_reply'} onClick={() => toggleReply()}>
        {isOpen ? `HIDE ` : `SHOW `}
        {number} {number === 1 ? "REPLY" : "REPLIES"}
      </div>
      <GetComment id={id} className={isOpen ? "" : 'reply_hidden'} />
    </>
  );
};

const GetComment = ({ id, className }) => {
  const [data, setData] = useState("");

  const [show, setShow] = useState(10);
  useEffect(() => {
    const getData = (id, token = "") => {
      let url = `https://www.googleapis.com/youtube/v3/comments?part=id,snippet&parentId=${id}&key=${API}${
        token === "" ? "" : `&pageToken=${token}`
      }&maxResults=100`;
      if (typeof localStorage.getItem(`replies-${id}`) === "string") {
        setData(get(`replies-${id}`));
        console.log("Local SSSSToraragwe");
      } else {
        fetch(url)
          .then((d) => {
            return d.json();
          })
          .then((d) => {
            console.log(d);
            setData(() => {
              let da = [];

              d.items.map((ddd) => da.push(ddd));
              if (d.nextPageToken) {
                getData2(id, d.nextPageToken).map((ddd) => da.push(ddd));
              }
              set(`replies-${id}`, da);
              return da;
            });
            if (typeof localStorage.toBeDeleted === "undefined") {
              set("toBeDeleted", [`replies-${id}`]);
            } else {
              var del = get("toBeDeleted");
              del.push(`replies-${id}`);
              set("toBeDeleted", del);
            }
          });
      }
    };

    const getData2 = (id, token) => {
      let url = `https://www.googleapis.com/youtube/v3/comments?part=id,snippet&parentId=${id}&key=${API}${
        token === "" ? "" : `&pageToken=${token}`
      }&maxResults=100`;
      let arr = [];
      fetch(url)
        .then((d) => {
          return d.json();
        })
        .then((d) => {
          d.items.map((ddd) => arr.push(ddd));
          if (d.nextPageToken) {
            getData2(id, d.nextPageToken).map((ddd) => arr.push(ddd));
          }
        });
      return arr;
    };
    getData(id);
  }, [id]);
  return (
    <div className={className}>
      {data === ""
        ? ""
        : data
            .slice(0)
            .reverse()
            .slice(0, show)
            .map((comment) => <Comm key={comment.id} data={comment} />)}
      {data.length > show ? (
        <div
          onClick={() => {
            setShow((prevShow) => {
              return data.length - prevShow < 10 ? data.length : prevShow + 10;
            });
          }}
        >
          SHOW MORE
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const Comm = ({ data }) => {
  const channel = `https://youtube.com/channel/${data.snippet.authorChannelId.value}`;

  return (
    <div className={'replies'}>
      <div className={'imgdiv'}>
        <a href={channel}>
          <img
            width={40}
            height={40}
            className={"rounded"}
            alt={data.snippet.authorDisplayName}
            src={data.snippet.authorProfileImageUrl}
            '{{' borderRadius: "50%" }}
          />
        </a>
      </div>
      <div className={'data'}>
        <div className={'name'}>
          <a href={channel}>
            <span>{data.snippet.authorDisplayName}</span>
          </a>
        </div>
        <div className={'comment'}>
          <span
            dangerouslySetInnerHTML={{ __html: data.snippet.textDisplay }}
          ></span>
        </div>
        <div className={'buttons'}>
          <div className={'like'}>
            <img src={like_fill} width={20} height={20} alt="like" />
            <span className={'liketext'}>{data.snippet.likeCount}</span>
          </div>
          <img src={dislike_fill} width={20} height={20} alt="dislike" />
        </div>
      </div>
    </div>
  );
};

const Del = () => {
  const remove = () => {
    const arr = get("toBeDeleted");
    arr.map((item) => del(item));
    del("toBeDeleted");
  };
  return (
    <button className={'remove'} onClick={() => remove()}>
      REMOVE COMMENTS
    </button>
  );
};

const set = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const get = (key) => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(key));
  }
};

const del = (key) => {
  localStorage.removeItem(key);
};

// const Replies = ({ data }) => {
//   const channel = `https://youtube.com/channel/${data.snippet.authorChannelId.value}`;
//   return (
//     <div className={'replies'}>
//       <div className={'imgdiv'}>
//         <a href={channel}>
//           <img
//             width={40}
//             height={40}
//             className={"rounded"}
//             alt={data.snippet.authorDisplayName}
//             src={data.snippet.authorProfileImageUrl}
//             '{{' borderRadius: "50%" }}
//           />
//         </a>
//       </div>
//       <div className={'data'}>
//         <div className={'name'}>
//           <a href={channel}>
//             <span>{data.snippet.authorDisplayName}</span>
//           </a>
//         </div>
//         <div className={'comment'}>
//           <span
//             dangerouslySetInnerHTML={{ __html: data.snippet.textDisplay }}
//           ></span>
//         </div>
//         <div className={'buttons'}>
//           <div className={'like'}>
//             <Image src={lIKE} width={20} height={20} alt="like" />
//             <span className={'liketext'}>{data.snippet.likeCount}</span>
//           </div>
//           <Image src={dislIKE} width={20} height={20} alt="dislike" />
//         </div>
//       </div>
//     </div>
//   );
// };

// let script = document.createElement('script');
// script.src = "https://unpkg.com/react@18/umd/react.production.min.js";
// document.body.appendChild(script);
// let scrip = document.createElement('script');
// scrip.src = "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";
// document.body.appendChild(scrip);
// let scri = document.createElement('script');
// scri.src = "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js";
// document.body.appendChild(scri);
