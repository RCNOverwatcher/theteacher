import React from "react";

function Common_units_of_storage() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Common units of storage
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                There are a number of units we need to know when
                                talking about storage and memory size.
                              </p>

                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/0a6cc66d-dce2-4feb-b725-611b20daf32dUnits.GIF"
                                  alt="Units"
                                />
                              </p>
                              <p>
                                <strong>Bit</strong>
                                <br />
                                The basic building block of any computer is the
                                switch. Computers, however, have millions and
                                millions and millions of electronic switches in
                                them, held in components such as RAM or the
                                processor. Each switch can have one of two
                                positions, on or off, which in computing, we
                                represent as 1 or 0. Each switch can therefore
                                hold one very simple piece of information (1 or
                                0) and we call each switch a 'bit' (from Binary
                                digIT) and is the smallest unit of storage or
                                memory that you can have. However, when you
                                group these switches together in a certain way,
                                you can represent data as binary codes, such as
                                letters of the alphabet or numbers!
                              </p>
                              <p>
                                <strong>Nibbles and bytes</strong>
                                <br />A single bit cannot hold a great range of
                                numbers! It can hold either zero or one. You may
                                have read about nibbles. A nibble is a group of
                                4 bits. The smallest value a nibble can hold is
                                0000 in binary and the largest number is 1111 in
                                binary. (0000 in binary is the same as 0 in
                                denary. 1111 in binary is the same as (1 x 8) +
                                (1 x 4) + (1 x 2) + (1 x 1) or 15 in denary. It
                                is also very common to group bits together in
                                groups of 8. A group of eight bits is known as a
                                'byte'. Bytes are extremely convenient and
                                important units of storage and memory to work
                                with, as you will find out in due course.
                              </p>
                              <p>
                                <strong>
                                  Kilobytes, Megabytes, Gigabytes and Terabytes
                                </strong>
                                <br />
                                We have seen that a byte can be used to
                                represent a number. We will see soon that the
                                number can be thought of as a code that
                                represents a character on a keyboard. Before we
                                look at that, however, we should note that if
                                one byte is going to represent one character on
                                the keyboard then we are going to have to
                                collect together lots of bytes to record a memo,
                                for example. For that reason, we frequently talk
                                about Kilobytes, Megabytes and Gigabytes.
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      1 Kilobyte (1 Kbyte) is 1024 bytes
                                      exactly, or 2<sup>10</sup> bytes exactly,
                                      or about 1000 bytes, or about a thousand
                                      bytes.
                                    </li>
                                    <li>
                                      1 Megabyte (1 Mbyte) is 1048576 bytes
                                      exactly, or 2<sup>20</sup> bytes exactly,
                                      or about 1000 000 bytes, or about a
                                      million bytes.
                                    </li>
                                    <li>
                                      1 Gigabyte (1 Gbyte) is 1073741824 bytes
                                      exactly, 2<sup>30</sup> bytes exactly, or
                                      about 1000 000 000 bytes, or about a
                                      thousand million bytes.
                                    </li>
                                    <li>
                                      1 Terabyte (1 Tbyte) is 1099511627776
                                      bytes exactly, 2<sup>40</sup> bytes
                                      exactly, or about 1000 000 000 000 bytes,
                                      or about a million million bytes.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                So 15 Kbytes is about 15 thousand bytes. 128
                                Mbytes is about 128 million bytes. 20 Gbytes is
                                about 20 thousand million bytes and 5 Tbytes is
                                about 5 billion bytes (or 5 million million
                                bytes, if you prefer). More often than not, you
                                don't need to know the exact number of bytes,
                                just an approximation!
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common_units_of_storage;