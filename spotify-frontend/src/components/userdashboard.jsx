import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Userdashboard() {
  const [Cmusic, setCmusic] = useState([]);
  const images = [
    "https://picsum.photos/id/1011/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1016/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1035/300/300",
    "https://picsum.photos/id/1041/300/300",
    "https://picsum.photos/id/1050/300/300",
    "https://picsum.photos/id/1062/300/300",
  ];

  const getrandomimages = () => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  };

  const getmusic = async () => {
    await axios
      .get("http://localhost:8000/api/music/getmusic")
      .then((res) => {
        console.log(res.data);
        setCmusic(res.data.music);
        console.log(setCmusic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getmusic();
  }, []);

  const navigate = useNavigate();

  const nav = () => {
    setTimeout(() => {
      navigate("/a");
    }, 1000);
  };
  return (
    <>
      <div className="userdashboard">
        <div className="upart-1">
          <div className="log">
            <img
              className="s-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPN9iRabYlPADljooW5j4UtXw9u2l6qIOdaA&s"
              alt=""
            />
            <h2 className="u-h2">Spotify</h2>
          </div>
          <div className="loga-1">
            <h3 className="L-h">Main</h3>
            <ul>
              <li>
                <span>
                  <img
                    className="cd-img"
                    src="https://files.softicons.com/download/business-icons/pretty-office-iv-icons-by-custom-icon-design/ico/home.ico"
                    alt=""
                  />
                </span>
                Home
              </li>
              <li>
                <i class="ri-search-line"></i>Search
              </li>
              <li>
                <i class="ri-book-shelf-line"></i>Your library
              </li>
            </ul>
          </div>
          <div className="loga-1">
            <h3 className="L-h">Music</h3>
            <ul>
              <li>
                <i class="ri-poker-hearts-fill"></i>
                <span className="l-s">Liked songs</span>
              </li>
              <li>
                <span>
                  <img
                    className="cd-img"
                    src="https://cdn-icons-png.freepik.com/512/6470/6470287.png"
                    alt=""
                  />
                </span>
                Radio
              </li>
              <li>
                <span>
                  <img
                    className="cd-img"
                    src="https://cdn.pixabay.com/photo/2013/07/12/18/04/dvd-152917_1280.png"
                    alt=""
                  />
                </span>
                Artist
              </li>
            </ul>
          </div>
        </div>
        <div className="upart-2">
          <div className="bar-1">
            <div className="pb-1">
              <h2 className="uh2">
                <span className="s-1">Good morning</span>,Alex👋
              </h2>
              <p className="u-p">Here's what happening with your music</p>
            </div>
            <div className="pb-2">
              <i class="ri-notification-fill"></i>
              <h3 onClick={nav} className="c-user">
                <i class="ri-add-fill"></i>Create music
              </h3>
            </div>
          </div>
          <div className="bar-2">
            <div className="sbox-1">
              <img
                className="sp-img"
                src="data:image/png;base64,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"
                alt=""
              />
              <h3 className="s-h3">HOURS LISTENED</h3>
              <p className="s-p">94h</p>
              <h6>12% this week</h6>
            </div>
            <div className="sbox-2">
              <img
                className="sp-img"
                src="https://freesvg.org/img/alarm_clock.png"
                alt=""
              />
              <h3 className="s-h3">PLAYLISTS</h3>
              <p className="s-p">14</p>
              <h6>12% this week</h6>
            </div>
            <div className="sbox-3">
              <img
                className="sp-img"
                src="https://cdn.pixabay.com/photo/2013/07/12/18/04/dvd-152917_1280.png"
                alt=""
              />
              <h3 className="s-h3">ARTISTR FOLLOWIG </h3>
              <p className="s-p">30</p>
              <h6>12% this week</h6>
            </div>
            <div className="sbox-4">
              <img
                className="sp-img"
                src="https://images.icon-icons.com/401/PNG/512/Microphone_40410.png"
                alt=""
              />
              <h3 className="s-h3">SONGS PLAYED</h3>
              <p className="s-p">12,833</p>
              <h6>12% this week</h6>
            </div>
          </div>
          <div className="bar-3u">
            <h2 className="b-h3">Recommended for You</h2>
            <div className="fix-bar">
              <div className="musicbar">
                <div className="musicbox-1">
                  <img
                    className="m-img"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA5QMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAQYHAAj/xAA9EAABBAAEAwUFBgUCBwAAAAABAAIDEQQSITEFQVEGEyJhcRQygZGhByNCscHwFTNSgtFj4RYkQ2Jyc/H/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QANREAAgIBBAAEBAQFAwUAAAAAAAECEQMEEiExE0FRYSIycYEFFKGxUpHB0eE0QvAVIzNDU//aAAwDAQACEQMRAD8A40AiVCNaiFBmtRGDMagGgzGjoiMg7Y0doyDxx6LJDDEcdp0gjMUWuyJh2CC+SwtjrMKSPdWF3BWYXlSVyQjmHbhNNQl3E3MK7BhtDQ6XohuBvMHCjoFtxt5B2E8gtuNvBPwh6JlIZTMN4bNIaa2geZ0UJ6vDDuR2YtNnydRFuK8NdgIYpJXtIkdlFbA1Y1+BS6fVxzzcUU1Gmlgim/UrJYqK7Npz2KPZRo0hQQD2arUYC9lJKA0Ae0JaFYtI1KBoC4LC0DIWFaAuCApArACNCYagrQmCHY21hkg7GohGI2IpDDDGJqGoYYzyRoI1DHfJY1jsMBJ2WFckWWGwpNUErkSc0WMMN+99VJzJOYUxAHSvgltiWTERP/xbkBLutLpZuuwpN9C808ETqMgJ6DVLvReGnyy8gQxLXuoMrztQnml/tR3YtBF8zYeN43oFcORzn2ezp9PhxfJEsWswrWgy4ltEbMF/BKsEV2x5ZMsnUIlPx6FuN4fiIowdBnZfUahNgax5U0bV4JZdNKL7o1+BrcRhWPY4GxWi99Oz5aM7F5ISB4iD5pkiyYpLF569EGhhSVmt8krQGBe2hqkYKFZACkAwD2UgKBcNVhGBeFhWDpYUMwJhwzAmCkHY1EZIZjaihhmNqcKGY2IjB3NPdOIsEC9EQS6PQ994f5up5NJvULE4SYWOaWtJH36pGdcYqS6DMxOKH/XeK5WlaMsV8Bo8XirF4iV39yRrgrHFBVaLXCSYiQ1nefja5Z30enj0uKr2osITIasvo6KMt3qdKwad9wQZoe7S3V5qDUn2xo4sMOYxSJnDNcb7gH+1CpAcMfmj3s7M2kTfg1CSkDbBeQhxBph1ALR8lbDFs5dVPb8onFO7TxkfFUli9jlhnl/EOwyX7zyVzTg0d2PI35jODwGHcHez4aMVqQxoFqd5v9smZ4tPCt0UHkwMcYD5sMzLdGwEjnnj3JghHTz4glf0NN4oyMY2drBlaJHAD4r3sE7xRb9EeLmSWSSXqyqe2ibN9E+4TaxWUDVK5IDiLP0SiuIB9LWIwDwEBGBcAsKwZRFCNCI4eMJhkMMCIwzGFkwpDUTVRMahyFlpgjZgJhcANwlsCVuhcYdjXAEMOut315rWWeCmqMsZWvTl1WopCLUuRmOI2kfB0wxKXI3Dhb8WwPIJHJnZj0sX8SNjwXCIpODSYwzyCVgfI2PKMmVmW7O9+L6KLXmNLK45o4HHjhX527/sPxcG7vGcNw7pXBuLhDyco8O9gfIfNTaTE/M/9vJOK+V1+wxhuENn4iyCKd3dPw/ftcWgOy5bAPnyQ8NAnrXHBva5uv1I4bh7ZuGSYoyPbIwupgAogBt2f7voh4SqzZdS45440lTrn63/AGJwcMjfiRHJM4MEDJS6hfiIHy1WWFNksutlHHajzua/kUnGcFDHw04h8svfOldHGGNaWHKBqbN7FXwYkjm1eWU8m1LyT/ma+0EOFkbq0oHNHhjMF6alc2SB34Szw08kRBjcWnyO645R2nowhGaqSDSTyPaA+R7gNrcSoSt9nRHFGLtI5rxHickHHeIxynNF7Q8a/h15L1cX/jj9D4/UZNupyL3YXv2yDwmwmKRyWQeywtQzYu+JNRN8gHxUtQlC72IAoA5qwrQIjVYQKwIjB2LWyioYjtFMZIbiCZMZIbiamtBoZZMyM5SMx8kyEc0nQdmKJBaGZQRpe6zLYUnJNBGsB9Vj04QXmHZh+dLFY4kNRYfTZYosHkh2OCmnRTnE7sC2LktvaSOAxYOPEFveTP72MHcU2rHTT6KTTSo5/Bi9ZLI49JU/5l3NisI7ifCZYsU1zcM+Rj3Fw0GVtH097VLKPKo8vHiyxw5YyjTlX7u/uTwWOwzeLzYubEtAfBAG5aNWWZmgcqym+gSU0wZsU3po41HlOX9af3shhsRh2cKxjHTR2Hyhrcwt1hoBA5jROpKuSmSE3qINL+H9LsJhpMPJxBj34iMNGFjbZcMrqoOafheiqo2RzQyLC0ou9z+vtRV8Ta2XgncxTxNY3EPeY3OGZzaABA3VILaNLDKWe5J8xXPlZrEkTY3eMEGtqWnKisMMYptoy3TVQl0NCNMK2StyuLJ2ehjVIJ3q52i92cv49TuOY/r7Q/8ANeni+RHxOs/1OT6sxw+YseI3HwnbyVCeOVMuB7u9o2kdiBSIWFoWktCxGhZ4WFoXkCwrAndYmwrER0MNpYZIYjCw6Q1E29gtY6HIWklYYNNF94x4sZwQcpr98lbG+CDhukSii7x1VufwtNC/M68kz5OnSw+NIeihERy7qae09uOCiyw8dgHkqrkvGCHoohzFeqKRZQoZawAXoqKCaszdAcbNhsFD3+KlETQee7vIDmkyYYrlkcupjij8TKcdq8GJSzuJsg/Ea29FytROH/qML6Nl4U6LiuH77BvbK26IG7T0IVIYlJcFvzUGrsZk4fNoQ3X0U5advoeOph5sH7NLG7nVVS0cOSId8ZIFMCdDdq6hJlY9Fe/COkk3oeaTwZXyJkxp8RF5IXMNWCozVEfDcSNSCI6HIHA7c1zTiNHu/MES5QcToT4Od8Y141jv/c7813w+RHxus/1GT6sExnNMc5cYd5lhDjuNCEGehje5GJK5oFHx2LSbLE5OhWRyNEJTF3o0TbAndagDDAgWQxE3M6rA8ysOhiPevJYoNRjax5rDD2GCIWWToC/DO01Z4k8XyDFJLJyQwzXOma5xJu6tUPW0+KpJlrFEDVi06SZ6VMsIIQCFaMB6obERPSlXwm2DcEiw40DBQTxwqPROWR+Zz3tHjp8ZxOdsjnCGKRzGR5rDa0/3Xm5ZOUmeBqMksk3ZWAKJBI2PsJxOXhfaXCOiaZGTPEMkQNZwdB8jr8ENzjyijW6DR9AnBQOGsY+Sos0keas815iWJ4LFID3YFq0NT6nTj1ko9ms8W4XJA+g01zrku2E4y6PX0+qUyhnGQkObzq1siT7PTjISxJBIa0Auval5mZV0VXK5F5Ji3wFriDuuZtgm4xrgWdnkNtaQOaXbZJttHPeLCuN40f67vzV49Hx+r/1GT6slGzREgM4UlkxaTo5unqgWwz2uiUwG9lFHRJX5iznFZomp0Lv3RJPsC5YAIhYwdjm9UCyaGIyORtYohmMIDoai1IHRAdFhh6PuikQMvuHMDqDtjoUyZy5HTsSw8L4cY6N49xxAT7uD6PRXPbL1LXDjUBNGZ620fie3r8F1Qyx9RZJjUbgV1wyKiMkXHBsE/ETAZdEuTMo+Z5+qzLHHs07jv2ccf/iHE5sJAMTG1/fREPaDMHONgWazD6ivReM5XJnjeNBq75Zo7mlji1wILSQQeRG4WLUZYaO9IBT5N/7K/aJxLhWFjwuPZ7dh2aNe95EjW9L5/FI5Ano4ZOVw/wBDp/Z/tNw3tBFeBlqVot8EgyvaPTmPMJkedlwTw/MizxWHZiIix45aHonhkcHwLiyPG7Rz7tFw6bDTktbYF0aCrlzZH8vR9Toc+PJHk10x4l15nNbfVQ/7j5Z6UpV8iBvZKD/MDiOilLhg2TkuWLSzlgIBPyRT9DkyS2s55xM5uM4x5OvfuVEfJ6l3nm/cPCNkSBMipYT0fR+RWDHsJMx1nREttkLujO6wdjAPACwrQB/NYUCd1jEmsHK0tlNifQxGz/uK1jxx+41GK8/igUqhmJ1HWqWGtrsssI4cqpY0pr1Ni4brtr6JkcuVjGOgrExy/wBYo+o/2Tx5R9B+CZd0dnozLGlim7XZ77JtLQ7NzQUjNDWFLpJAAT6KscrIZKijpHZrB9zh+8dudkcmRuNWfJfiGXdOkXRXOeac/wC1P2Y4PimLkxvDcR7HNJbnxFgMbnf1dQdTe96bLNPyOzDq9iqatGl9suy+B7OQYDBxff48h0uIn1FgkBrQ3kAjzXJ2YJ+K3OqRq22h3CU6uh7g/Ep+F8RgxkLjmheHaHccx8QmQsl4kXBn0VBLHiII54SHMkYHtINggiwszwGqbRVdpMKJcCZObU0ZOuDu0OZQnTOU8QxbIZy1xO9Kb3vs+ujqMUYJsrpsc8eFuUA7HcpljbOPUfiDi6iKyzSye8fonUEjz56rJkfLNNx9/wASxN7mUrHh578R2NQHb0P5LEiY8UsA/wBQfkUGPj+YexAA5hbk9DdETeWclhHKIrKBaJJ7Rd4WEAEarCUSjKBZDEZCxRMZj8igOuQ7GvuwR6LWCUZvossFf42hYz3dM2PhjduWqY5MkCyxwrBuk0+7Obf4IKTid/4NlePVKPqVTseWg5YRJ1AkF/Vbxb7PqcmWUfkju+6CR45j25nQyR+RA/yklQY5pONyg19S14HKyXEto89uaEWyWpyR8PhnWuHsDMHGB0TyfJ8XnleRjCUkZOwTAOF/aXxH2jtRjgSahLYWf2iz9Sfksezpvgwo1GF3evOm/JArCW5h8O25gHCwSsg9M772GlE3Y/gzgby4RjCfNoyn6haR4+o/8svqWuPYJsJLH1aUI9k4/MqOL9ouFv8Aan/fANJT+IvQ+hw6LJOHz8FT7EYhTMp8yUylYMmklDjsG+ORmlADyTcMg4TiafxIE46V2v8ANddpWeXqPmsnC7U+iBzjGHBfjIWgXlBcVhoJt0g2KtpJJ+CZclWnDhijyhQNwB7lgKQF5tYNgDvyQNR5nqgOkw7HIDLcMxuQKpSGopAPeNHlztC0Otw7h5gDqjaBKE5eZc4DiUMRGcu61SO5EZaXLLzH8dxaCbh00bA/M4ACx5hK2X0mnyY80ZFTBigx3ujXpSnKn5n0mHLOL+KH7DgxrHCnbAdUnwrzOtZZPuNL7D3B8ZhcPie8llNWLLqNJ45F6nDqcEpRe1N39P6nVMF2r4G3CRh3EoGECiHHZO5xvhnzkvwzWOTaxMaHajgZ24nBp5la0L/0zWf/ADZn/iXg2w4jD5b/AOE25Cv8O1f8DOD9tZ2TdpeIyRPzxvxEhaRzFoo66lCChJU0UbC5jSWkg9QiZWkZhcRK0gkajmmoCk/M7R9nPaXhmD7MMwmPxscMkE8rA15OozWD9SpyaXZPJodRmm5Y4Nov8V2u4AIZMvFcPnymgCUsZxTEf4Tr64xM5H2ixxxU5dhw+QE73or78XnJHQtJrYxSWGV/Vf3K2OTEt2if802/D5SHjh/EE7eJ/p/cnJJO8G4SPLMFlLH/ABDzxat/+pr7o1TiBLsViht9445elFJ30eZn3OUk/wCXoCidy5oHIO4B2skzSbrKChuS7LxwZZK4kpmvcTraO9B/LZhdzD1R3oH5bIgL2nmtuQPAmAeCtaB4Ul2BIN7rWDw2QadUoybQwzc1rSDHTCtcPVAzl7DMROU/ohRSE1VsZjeXDcj0CFDKbfsOxkVuSdMpQHeaUHW4NIXHDPGarG6BTfLZxL7imZhu5OhsH9gIe6OmM4JOLlfT75/svp2TD+8cWR2eelH9+qRquR451mk8UH78V6f082MxGiw5rFjWtEKuw5dS8dJSuqtf8X9SxikMZa3U5tQa0ckrixlqsuKFP4pPqrr/ACN4bFa3n0Fg+fyRHza9PE5r4WuPv6UOMnYA11b860v4p1EK1Etm5Pv3NP4pMJuIYiTkZHV810xXBwZH8XIs0hwKYWzEbqkb6hGhEy74TP8A8tKBV951PP0XPnXJ6ugnNp0/2X9BovGpL20eZcobTu/M6jY7atCsj5AbAFk65rACeMEcz1upl1X15S+pJsztSRWU0/UaKuxDfm80ov27J98AHEuutNCPqdlvDMtTJKTlLr3NRxpL+JYoto3K47+auuEfM5m8mebj5sVAcZDG3c8+iVnPGNumW8LWxxsY0aAfNTas9GM0kkee4VutQd6F3uTCOQB5RoRyQF5WJuQEnVEXcCHwQEbkugt6hY05U1QdhQHjSQzGQNLry5oDpqMXzX1DtLQW6mrvTn5IonkSVcjsZaGitB1Sh2RkrCzyEQPbTSSBRdtuEKOiE1uUIpX+hXTGSJ+UiNxzauIrNXQ/46Ira+g5vEhPw5xUvf1S9/7ewzh54hh3gAht5spOljWvMeZUpJ7j0NHmwfl5R5XN19ul6/Xg9A8Ncx8bXG3b5gW76DyTSXHJ57jNTjk09tt/b6V+vPkOSYyZgY6UEZgWscbF7WfT96JVGzr1Gsy4IKTXLtJ/4roZw+KGYgHM0AtJB19L80XFHVp8uGTXwqbS+b37r7h4sTN4MxkLwDrIPO6H76KhCeSWee6UHb5V8K17/Q1h8pcbdud1VLg4ZSbdswJKaaRMpcHo3+IIgT5LDDTiKDQVndy3Kjl5GU4+Io8pvzv7f1CvlexpBpwBDXE0OfT9VGNNHVnxzxTcZStRpN/rTXt69HhM63ljwWf1nZunKvVUil5opLPNyksclt9X0vo/8BI3vkEb5DG5jPDmB94dVThWkTlCeokp5KcU6779/cx3j2HKA12X9/kq1as5caljnsSur/57ooMZA6SbF4hrm5Gyu8Ox5n9D8ktHJOScmCwjvvDYCWQI23SLFl1yFa2lKN9UDd4vdPxRFUXNfCwMgI2IPXyRNUo89gHFajJtrkC7msKugRrrSIKYEeSBNphYwCacVgxW50xlho5Q0g9RugXuvhSCtJbusRlJpVIZidpdBA0JRqmh2MgbeOtNClOtRhBcuzOMk+7ldG0AAAjS9QUeGLOfxXAqmyEsyyOppcCNL1/RbroEZ+JHZklS76vkwZ3ZSyO7HuvBo10+KyilywvUNQ8OHl0/b0+555kg+7N2PPT96rKnyRzY8uJ+E3wvTrkKJDka4yZnWdXOIH780eH5By45VGW679b/AK/uHZimhjmSNJfqc8e3laG1t2jqjnxrC8Uk938UXxx1/lkhjC3K5pJI1zE6hW20cMdRlc1LdyIF4DisjpcuTxkWBZON3Sr81hosaMo7lhFHLoQfzU5iyVS3VZ4idoDpG5ABXqFFSi3SLTwaiFylGl5+6JRlkhFDKfw279SqW0ZY8U5OMOPv+/qHM7m+DUkaHxbp4q+Q5Mso1CXcffyJGYXnAp3MclSKaIZZxnLclRTOxUMeIxLZGyyAyG42upp1+dbJX2c8u2LsMmbO1haL0BP5IM0W74LRjwG1fLmkOiO2PzGC+97IOmh5LDr36AEjbT5JicVFxoDIS3Y/BYlu28IXfe5REbYJYNNgmEhYSMqDMIu/xdUrKwq7GGG23+IIFm32EY4ZryH0RJ/C5W0GbIC6x8liM5JytDLJKN20VSBXFa+JE5Xk4Z9Oux1vmgyuSeRtLyZWu0JugAOaWwLG07aJBzZcokkc0t0Bq6CFuPRW45mlklX2XCJNMpY6FrwWHVxOg0W3L5qH255KWCMvh/QxE6KMuGIZnNDLTtPjSa2+Yk4xxYpNaiNtdU+PuRilLg2GmAZrzncBU65JRn4kVhaSV9kZHd24ta/O29xsfRUu1ZDw1HI1d0Cz3raBSzAeCaBWNYaN2ZwaDqVh1Ib7trAAHk3qeeqhORaEYyaROSQnwSm8gyitCfUqMYpco682eTj4eTy4PCYua1hA8N1XmqxVOyEsrnGMGronnDWMaWOB38QItUjYuaoxipR5CyZ4w17oTThbc7TRHkm7F+FfFFJ/sU0pyzyuAbRcTQQOSSp2iUbrIWF/cb/BfLqgdE18PxEXSOBpriiSjKS4iwL8w1rZGzbJw5YFxJ1Kwm1y+IE8rDNWgROqwiBArATCN01tAKV8hWEEHU2gx6Tu3yFikcDv5WiLGT6GG5K8A15oDT8NNJDDJY7a5zc2lFqCTHc8Vp0GLopC1jBpR02SZOIMth2S1EIx6G43YeLheKwro7me62ODQRqBz3FV9Vzxy0qPSzaO/Mq24cg3oeqPiHPHSU+TD4MxsADoEfEDPTKTvoxiIzJIXhobf4QjCdE9RieTI5JUBENOGdpy3rXNWWQ5JYWhp/8ADGMJdh5jbiQ3vqIbQ0uvXVUU7FngcFdikeI4cAe+wk7na7TUNzX0rlqnI8mBiOHh9+zTmPxW3vaOwrXyOb1sLG5LDhLuHzzPy4aew06ukrQnT9VLJParOvSYXmyOKYxiY4xIXMtos0D0XI8m5nqrTRhyyvka0G81+pTxbOPLBX2REle6TXkqo57a6JMkEr2RPlyAn332Q1UjwTnklL5nZc8dmdLhIg/EYZ+R9kRSlxJ15ECh4j15dBTkbRrLj965w5lKDcSDiSCd1gye7kYY9xaRenRahW20eMgr3fqtRRzi1VAi4nclEVOUuGwb3aUgO5JKgTiiJfuCcdVhGDCFmpk2upYKdE7uqWRpdhGlEUK12iwKCRlCwpWMMeW0WkgoNKSpjxk8clKPYUSuPOkng4/Qv+d1HlImZBkGbcc0Hhh5I6Y6ydfFMWw0eMxb3tZOA4C/EN9dOSCxw9APUZ6vcKNnxLqJe75BLtgvICy6hvlk88x3cfkFrXkVvJIxUrvxadKCZN+RHIo9yZBuDbzFBVSkcspY/JBW4SLKdCfiU1CbkEgvDuJhJYXCiQtKKkuRsWfJi5g6PSPe46yFyRQj6FZ6jK18UrAlt7klNtRBzl6mBGP2UdqMpy6s85lDQIIMk0QdYuuaNiAzYQNZKMm9VjIaBaBogVajXBE0jyCo0CLlheuQbiibhgiVgJ0QO6wHyDBWNbJLGpk2nVYAZKVe2qRIZq2RsRwaCRuRDB+gZr0AzdhWTDbKK5notTMsiSqiR8YAHW0bFUbYRsrcPUgeWP2zN3XNlhPd8J6mmzYo4ayPlMX7wO/kxk/+XJGOGXmyeTXQXyR/mSET3C3V6BWjjijjnqck/Og7IWNYDu4phlsUb7ZN0Q/D0RRPLV8Ee5RJkfZ78Ox313QbKwxuSIdwBd8lhEknUjAwziAa0KBTwm+V0ZOHoaIJlJYo7LQN8eiJzgTHaAaPOhaAEtlniVWDMYB0RTJzil0ZtEXvoiXLB6fJBzx0WC5J+QJxREBkrAIErGIAoGCA6LDPoyERSbUAhcxLQEF2NJtxok06oiBYhmBJWY0YqXYXZl8yguykoKMbQxhwH01wsIXyVxwU4ckXakhOck1UmkZanFCtWMFB0+CwW2Fa8mUFL5FsUn4iYZwHiNC63Sps6ZQjTddicm9dE5x26owfdQrkeTtHmuNAWhQY5ZLgwxo1Na2sw4+zDwLOiUKitwoSRqFiL6Js8TdUp143cOQDtymOd9MGCbWYIOmQedUUafMgTt0RH2QcgZkCiAiVjH//2Q=="
                    alt=""
                  />
                  <h3 className="m-h3">Neon nights </h3>
                  <h4 className="m-h4">The moonlight</h4>
                </div>
              </div>
              <div className="musicbar-2">
                <div className="musicbox-1">
                  <img
                    className="m-img"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <h3 className="m-h3">Neon nights </h3>
                  <h4 className="m-h4">The moonlight</h4>
                </div>
              </div>
              <div className="musicbar-3">
                <div className="musicbox-1">
                  <img
                    className="m-img"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <h3 className="m-h3">Neon nights </h3>
                  <h4 className="m-h4">The moonlight</h4>
                </div>
              </div>
              <div className="musicbar-4">
                <div className="musicbox-1">
                  <img
                    className="m-img"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <h3 className="m-h3">Neon nights </h3>
                  <h4 className="m-h4">The moonlight</h4>
                </div>
              </div>
              <div className="musicbar-5">
                <div className="musicbox-1">
                  <img
                    className="m-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3hZ3C1mQoWn8xSt0BDVSpAjn9i0POSPi3g&s"
                    alt=""
                  />
                  <h3 className="m-h3">Neon nights </h3>
                  <h4 className="m-h4">The moonlight</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bar-4">
            <div className="nbr">
              {Cmusic.map((m) => (
                <div className="Mdiv" key={m._id}>
                  <img className="rimage" src={getrandomimages()} alt="" />
                  <h3 className="Tt">{m.title}</h3>

                  <audio controls src={m.uri}></audio>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userdashboard;
