import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../components/Button/Button";
import Script from "next/script";
import { useRouter } from "next/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const testFunction = () => {
  var d = (e, n) => {
      try {
        console.log(n);
        e.appendChild(n);
      } catch (t) {
        e.appendChild(document.createTextNode(n));
      }
    },
    c = ({ tag: e, className: n, content: t, attrs: o }) => {
      var l = document.createElement(e);
      if ((n && (l.className = n), t))
        if (t.constructor === Array)
          for (var r = 0; r < t.length; r++) d(l, t[r]);
        else d(l, t);
      if (o) for (let a in o) o.hasOwnProperty(a) && l.setAttribute(a, o[a]);
      return l;
    },
    m = (e) => {
      var t;
      let n =
        (t = document.getElementById(e)) == null
          ? void 0
          : t.getAttribute("src");
      return n ? new URL(n).origin : "";
    };
  var p = () => {
    let e = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    e.setAttribute("fill", "none"),
      e.setAttribute("r", "30"),
      e.setAttribute("cx", "33"),
      e.setAttribute("cy", "33"),
      e.setAttribute("stroke-width", "6"),
      e.setAttribute("stroke-linecap", "round");
    let n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return (
      n.classList.add("luma-spinner"),
      n.setAttribute("viewBox", "0 0 66 66"),
      n.appendChild(e),
      n
    );
  };
  var b = "https://lu.ma",
    h = (e, n) => {
      n.preventDefault();
      let t = c({ tag: "div", className: "luma-checkout--overlay" }),
        o = c({
          tag: "iframe",
          attrs: {
            src: `${b}/embed-checkout/${e}`,
            allowfullscreen: !0,
            style: "border: 0px; width: 100%; height: 100%;",
          },
        });
      o.onload = () => {
        t.classList.add("luma-iframe-loaded");
      };
      let l = c({
          tag: "div",
          className: "luma-checkout--modal",
          content: o,
        }),
        r = E(),
        a = c({
          tag: "button",
          className: "luma-checkout--close-btn",
          content: c({
            tag: "img",
            attrs: { src: `https://embed.lu.ma/static/x.svg` },
          }),
        });
      t.appendChild(a),
        t.appendChild(p()),
        t.appendChild(l),
        t.appendChild(
          c({
            tag: "div",
            className: "luma-checkout--by",
            content: [
              "Processed securely by ",
              c({
                tag: "a",
                content: "- Luma",
                attrs: { href: "https://lu.ma", target: "_blank" },
              }),
            ],
          })
        );
      let i = () => {
        var u;
        (u = t == null ? void 0 : t.parentElement) == null || u.removeChild(t);
      };
      (t.onclick = i),
        (a.onclick = i),
        document.body.appendChild(t),
        setTimeout(() => {
          t.classList.add("luma-show");
        }, 1);
    },
    g = () => {
      let e = document.querySelectorAll('[data-zmurl-action="checkout"]'),
        n = document.querySelectorAll('[data-luma-action="checkout"]');
      for (let t = 0; t < e.length; t++) {
        let o = e[t],
          l = o.dataset.zmurlEventId;
        l && (o.onclick = h.bind(null, l));
      }
      for (let t = 0; t < n.length; t++) {
        let o = n[t],
          l = o.dataset.lumaEventId;
        l && (o.onclick = h.bind(null, l));
      }
    },
    E = () => m("luma-checkout"),
    s = () => {
      let e = window;
      if (e.luma && e.luma.initCheckout) return;
      (e.luma = e.luma || {}), (e.luma.initCheckout = g);
      let n = E();
      document.head.appendChild(
        c({
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: `https://embed.lu.ma/checkout-button.css`,
          },
        })
      ),
        g();
    };
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
    ? s()
    : (document.addEventListener("DOMContentLoaded", s),
      window.addEventListener("load", s));

  return { s, g };
};

const UpcomingEvents = ({ events }) => {
  const upcomingEvents = events.filter((event) => !event.concluded);
  const router = useRouter();

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentEventIndex(index);
    router.push(router.pathname, {}, { shallow: true });
  };

  useEffect(() => {
    testFunction().g(); // gets all the elements data-luma-action
    testFunction().s(); //
  }, [currentEventIndex]);

  const showBanner = useMediaQuery("(min-width: 1024px)");

  // If there are no upcoming events, don't render any event cards
  if (upcomingEvents.length === 0) {
    return (
      <section className="py-14 bg-offwhite" id="noUpcomingEvents">
        <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
          {/* Header */}
          <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
            Stay tuned for our upcoming events!
          </h1>
        </div>
      </section>
    );
  }

  const currentEvent = upcomingEvents[currentEventIndex];

  return (
    <section className="py-14 bg-offwhite" id="upcomingEvents">
      <div className="container md:px-4 lg:px-0 flex flex-col justify-center items-center place-items-center h-full lg:justify-between">
        {/* Header */}
        <h1 className="text-black pb-10 text-center text-4xl lg:text-6xl xl:text-5xl">
          Upcoming events
        </h1>

        {/* Container for Events */}
        <div className="relative w-full">
          <div className="text-center justify-center overflow-hidden">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`w-full transition ease-in-out duration-700 opacity-0 ${
                  index === currentEventIndex ? "opacity-100" : ""
                }`}
              >
                {index === currentEventIndex && (
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="relative xl:w-10/12 md:w-2/5 w-64 h-64 rounded-md shadow-md overflow-hidden">
                      {/* Event Image */}
                      {showBanner ? (
                        <Image
                          src={event.banner.file.url}
                          alt={event.title}
                          priority={true}
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        <Image
                          src={event.image.file.url}
                          alt={event.title}
                          priority={true}
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col md:w-4/5 w-full h-auto mx-5 mt-5 md:text-left text-center">
                      {/* Event Details */}
                      <h2 className="text-2xl mb-2 ">{event.title}</h2>
                      <h3 className="text-lg mb-2">
                        {new Date(event.dateStart).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                        ,{" "}
                        {new Date(event.dateStart).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}{" "}
                        -{" "}
                        {new Date(event.dateEnd).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                        {"  ||  via "}
                        {event.location}
                      </h3>
                      <p className="text-lg mb-2 overflow-ellipsis overflow-hidden">
                        {event.description}
                      </p>
                      <a
                        href={event.lumaLink}
                        className="mx-2 mt-4 bg-green text-white text-bold text-center transform transition-transform hover:-translate-y-1 hover:shadow-md py-2 px-4 rounded-md"
                        data-luma-action="checkout"
                        data-luma-event-id={event.lumaEventID}
                        //onClick={(e) => e.preventDefault()}
                      >
                        Open in Lu.ma
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <Script
          id="luma-checkout"
          src="https://embed.lu.ma/checkout-button.js"
        /> */}

        {/* Navigation Dots */}
        <div className="flex justify-center mt-5">
          {upcomingEvents.map((_, index) => (
            <button
              key={index}
              aria-label="Dot"
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                index === currentEventIndex ? "bg-green" : "bg-gray"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
