"use client";

import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export type onDeleteProps = {
  current: string;
  prev: string;
};
export type onInsertProps = {
  current: string;
  prev: string;
};

export type CheckInputChangeProps = {
  current: string;
  prev: string;
  onDelete?: (props: onDeleteProps) => void;
  onInsert?: (props: onInsertProps) => void;
};

function WhatsAppWidget() {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  function checkInputChange({
    current,
    prev,
    onDelete,
    onInsert,
  }: CheckInputChangeProps) {
    if (current.length > prev.length) {
      onInsert && onInsert({ current, prev });
    } else if (current.length < prev.length) {
      onDelete && onDelete({ current, prev });
    }
  }
  function autoResize(e: any) {
    const MIN_HEIGHT = 0;
    const MAX_HEIGHT = 50;
    checkInputChange({
      current: e.target.value,
      prev: text,
      onDelete: ({ prev, current }) => {
        e.target.style.height = "auto";

        if (e.target.scrollHeight > MIN_HEIGHT && MIN_HEIGHT > 0) {
          if (e.target.scrollHeight > MAX_HEIGHT) {
            e.target.style.height = MAX_HEIGHT + "px";
            return;
          }
          e.target.style.height = e.target.scrollHeight + "px";
        } else {
          if (e.target.scrollHeight > MAX_HEIGHT) {
            e.target.style.height = MAX_HEIGHT + "px";
            return;
          }
          e.target.style.height = "";
        }
      },
      onInsert: ({ prev, current }) => {
        if (e.target.scrollHeight > MIN_HEIGHT) {
          if (e.target.scrollHeight > MAX_HEIGHT) {
            e.target.style.height = MAX_HEIGHT + "px";
            return;
          }
          e.target.style.height = e.target.scrollHeight + "px";
        } else {
          if (e.target.scrollHeight > MAX_HEIGHT) {
            e.target.style.height = MAX_HEIGHT + "px";
            return;
          }
          e.target.style.height = MIN_HEIGHT + "px";
        }
      },
    });
  }

  return (
    <div className="fixed bottom-4 right-4">
      {open && (
        <div id="wa-widget">
          <div className=" rounded-xl overflow-hidden absolute right-4 bottom-20 h-72 w-64  bg-[#ece5dd]">
            <div>
              <div className=" h-12 bg-green-900 flex justify-between gap-2 items-center px-5  py-2">
                <div className=" text-green-900 bg-slate-100 p-1 rounded-full">
                  <FaWhatsapp size={20} />
                </div>
                <h1 className=" text-slate-100 text-sm">Lb Rent</h1>
                <div
                  onClick={() => setOpen(false)}
                  className=" text-white bg-green-950 p-2 cursor-pointer rounded-full"
                >
                  <IoClose />
                </div>
              </div>
              <div className="  px-5 ">
                <div className="  w-full bg-white mt-2 rounded-lg p-2 font-light">
                  Ciao come posso aiutarti?
                </div>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (text == "") {
                    return;
                  }
                  window.open(
                    `https://wa.me/+393314487994?text=${text}`,
                    "__blank"
                  );
                  setText("");
                }}
                className=" absolute bottom-0 flex gap-2 px-2 bg-gray-300 h-14 items-center"
              >
                <div>
                  <textarea
                    onChange={onChange}
                    onInput={(e: any) => {
                      autoResize(e);
                    }}
                    ref={textAreaRef}
                    className=" resize-none px-3 mt-2 h-[30px] rounded-lg w-full p-1 bg-[rgb(252,251,251)] text-black text-sm font-light"
                    id="text"
                    name="text"
                    value={text}
                  />
                </div>
                <input className=" hidden" type="submit" id="ws-submit" />
                <label htmlFor="ws-submit">
                  <button className="  text-green-900 p-1 rounded-full flex items-center justify-center">
                    <IoMdSend />
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      )}
      <div
        className=" cursor-pointer text-2xl flex justify-center items-center w-16 h-16 lg:h-18 lg:w-18  p-3 rounded-full absolute bottom-0 right-0 text-white bg-green-900"
        onClick={() => setOpen(!open)}
      >
        <FaWhatsapp />
      </div>
    </div>
  );
}

export default WhatsAppWidget;

/**
 * 
 *  function autoResize(e: any) {
    const MIN_HEIGHT = 0;
    const MAX_HEIGHT = 70;
    checkInputChange({
      current: e.target.value,
      prev: text,
      onDelete: ({ prev, current }) => {
        e.target.style.height = "auto";

        if (e.target.scrollHeight > MIN_HEIGHT) {
          if (e.target.scrollHeight > MAX_HEIGHT) {
            e.target.style.height = MAX_HEIGHT + "px";
          }
          e.target.style.height = e.target.scrollHeight + "px";
        } else {
          console.log("else");
          e.target.style.height = MIN_HEIGHT + "px";
        }
      },
      onInsert: ({ prev, current }) => {
        if (e.target.scrollHeight > MIN_HEIGHT) {
          if (e.target.scrollHeight > MAX_HEIGHT) {
            e.target.style.height = MAX_HEIGHT + "px";
           return
        }
          e.target.style.height = e.target.scrollHeight + "px";
        } else {
          e.target.style.height = MIN_HEIGHT + "px";
        }
      },
    });
  }
 */
