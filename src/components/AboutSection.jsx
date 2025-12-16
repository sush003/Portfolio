import { HoverBorderGradient } from "./ui/hover-border-gradient.jsx";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
// import "photoswipe/dist/photoswipe.css";
import { useEffect } from "react";
import PhotoSwipe from "photoswipe";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
export default function AboutSection() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery--getting-started",
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "fade",
      showAnimationDuration: 350,
      hideAnimationDuration: 250,
      easing: "ease-out",
    });

    lightbox.on("uiRegister", () => {
      
      lightbox.pswp.ui.registerElement({
        name: 'download-btn',
        order: 100,
        isButton: true,
        appendTo: "bar",
        html: `
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M12 5v10m0 0 4-4m-4 4-4-4" />
            <path d="M5 19h14" />
          </svg>
        `,
        onClick: () => {
          const link = document.createElement('a');
          link.href = "src/assets/document/Sushrut_resume_SDE_.pdf"; // replace later if needed
          link.download = "Sushrut_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
      // Remove PhotoSwipe built‑in zoom button
      lightbox.pswp.ui.registerElement({
        name: "zoom",
        order: 200,
        isButton: true,
        html: "",
        onClick: () => {},
        appendTo: "bar",
      });
      lightbox.pswp.ui.registerElement({
        name: "close",
        order: 100,
        isButton: true,
        html: "",
        onClick: () => {},
        appendTo: "bar",
      });

      // // Remove PhotoSwipe built‑in zoom-in button
      // lightbox.pswp.ui.registerElement({
      //   name: "zoom-in",
      //   order: 70,
      //   isButton: true,
      //   html: "",
      //   onClick: () => {},
      //   appendTo: ""
      // });

      // // Remove PhotoSwipe built‑in zoom-out button
      // lightbox.pswp.ui.registerElement({
      //   name: "zoom-out",
      //   order: 71,
      //   isButton: true,
      //   html: "",
      //   onClick: () => {},
      //   appendTo: ""
      // });
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <section className="content-section flex justify-center" id="about">
      <div className="max-w-[700px] text-left">
        <div className="section-divider"></div>

        {/* ROW 1 — Heading with Avatar Below */}
        <div className="w-full flex flex-col items-start gap-5">
          {/* <h2 className="text-[2.2rem] font-bold">About Me </h2> */}
          <h2 className="text-[2.2rem] font-bold about-title mt-12">
            About Me
          </h2>

          {/* Avatar Below Heading */}
          <div className="flex flex-row items-center gap-4 text-left mb-9">
            <img
              src="src/assets/images/pfp2.jpeg"
              alt="avatar"
              className="w-28 h-28 rounded-full border border-white/60"
            />

            <div className="flex flex-col">
              <h3 className="text-white text-3xl font-bold">SUSHRUT</h3>
              <p className="text-gray-400 text-lg">
                <a
                  href="https://x.com/SushrutNisal"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  @sushrutnisal
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="text-[1rem] ">
          Hi, I'm <strong className="text-white">Sushrut</strong>. I’m a
          22-year-old developer and a professional bug creator. I have a toxic
          relationship with JavaScript, and my Git commit messages are mostly
          cries for help.
        </p>
        <p className="text-[1rem]">
          On a real note, though, I love the process of creation. Whether it’s
          architecting a <strong className="text-white">full-stack app </strong>{" "}
          or contributing to a{" "}
          <strong className="text-white ">collaborative project</strong>, I am
          driven by the challenge of mastering new tech and shipping products
          that users actually enjoy.
          <strong className="text-white"> (Shocking, I know)</strong>
        </p>
        <p className="text-[1rem]">
          When I’m finally <strong className="text-white">not coding</strong>, I
          engage in what I’m told is a 'social life.' My hobbies primarily
          include <strong className="text-white">gaming </strong>
          (where I play to relax but end up screaming at pixels due to lag) I
          also enjoy the occasional '
          <strong className="text-white">outdoor adventure</strong>' which
          usually consists of me walking to a coffee shop, judging their Wi-Fi
          speed.
        </p>
        <div className="mt-8 flex justify-start gap-4">
          <HoverBorderGradient className="py-1">
            <a href="https://x.com/SushrutNisal">
              <span className="flex items-center gap-2 ">
                <div className="relative flex items-center justify-center">
                  <span className="relative flex h-1.5 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  </span>
                </div>
                Avalaible for opportunities
                <svg
                  className="humbleicons hi-brand-x"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m18 4-5 6.667M6 20l5-6.667m2-2.666L8.3 4.4a1 1 0 0 0-.8-.4H4l7 9.333m2-2.666L20 20h-3.5a1 1 0 0 1-.8-.4L11 13.333"
                  />
                </svg>
              </span>
            </a>
          </HoverBorderGradient>

          <HoverBorderGradient
            as="button"
            onClick={() => document.getElementById('cvImageLink').click()}
            className="flex items-center gap-2 text-white py-1 liquid"
            containerClassName="border-[#0AE4EB]"
          >
            <span>Resume</span>
            <svg
              className="humbleicons hi-download-alt"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v8.5m0 0 3-3m-3 3-3-3M5 15v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
              />
            </svg>
          </HoverBorderGradient>
          <div id="gallery--getting-started">
            <a
              href="src/assets/images/resume.jpg"
              data-pswp-width="1600"
              data-pswp-height="2260"
              id="cvImageLink"
              style={{ display: "none" }}
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
