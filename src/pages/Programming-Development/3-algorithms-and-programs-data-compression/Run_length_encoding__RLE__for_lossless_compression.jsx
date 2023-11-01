import React from "react";

function Run_length_encoding__RLE__for_lossless_compression() {
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
                                Run length encoding (RLE) for lossless
                                compression
                              </h1>
                              <p
                                class="western"
                                style="margin-bottom: 0cm; line-height: 0.48cm"
                              >
                                <span style="color: #000000">
                                  <span
                                    style="
                                  font-family: Arial, Helvetica, sans-serif;
                                "
                                  >
                                    <span style="font-size: 9pt">
                                      <strong>Introduction</strong>
                                      <br />
                                    </span>
                                  </span>
                                </span>
                                <span>
                                  <span>
                                    <span style="font-size: 9pt">
                                      In 'lossless compression', the codecs keep
                                      all of the information about a file. The
                                      compressed file, once decompressed, can be
                                      reconstructed so it is exactly like the
                                      file before it was compressed, with no
                                      loss of any information at all.
                                    </span>
                                  </span>
                                </span>
                              </p>
                              <p
                                class="western"
                                style="margin-bottom: 0cm; line-height: 0.48cm"
                              >
                                <span>
                                  <span>
                                    <span style="font-size: 9pt">
                                      RLE works by looking through the data in a
                                      file and identifying repeating strings of
                                      characters, called a 'run'. The run is
                                      then encoded into a small number of bytes,
                                      usually two. The first byte, called the
                                      'run count', holds the number of
                                      characters in the run. The second
                                      character, called the 'run value' is the
                                      actual character in the run.
                                    </span>
                                  </span>
                                </span>
                              </p>

                              <p>
                                For example, the following data would take 20
                                bytes to store (because there are twenty
                                characters): GGGGGGGGGGGGGGGGGGGG but the same
                                data could be encoded to 20G using RLE and you
                                would only need two bytes to do it. 20G is
                                called a 'run packet'. The first byte of this
                                run packet, the run count, holds 20 and the
                                second byte, the run value, holds G.
                              </p>
                              <p>
                                In RLE, you create a new run packet each time
                                the run character changes or each time the run
                                length is exceeded. If you are using one byte to
                                hold the run length, then the maximum length
                                that can be held is 255.
                              </p>
                              <p>Here is another string:</p>
                              <p style="margin-left: 30px">
                                <strong> BBBBBaaa55555555X000000000</strong>
                              </p>
                              <p>Using RLE, this would be encoded to:</p>
                              <p style="margin-left: 30px">
                                <strong> 5B3a851X90</strong>
                              </p>
                              <p>
                                Before encoding, you would need 25 bytes to
                                store the data. After encoding, you would only
                                need 10 bytes to store the data. Note that the X
                                was stored as a run packet, even though it is
                                only one character long. A run packet for X (two
                                bytes) is actually twice the size of the single
                                byte needed to store X. As we have already said,
                                in RLE, you need to create a new run packet each
                                time the run character changes. As it turned
                                out, the single X didn't really change the
                                overall compression we achieved very much.
                                Suppose we had this data, though:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>BONGOthedog</strong>
                              </p>
                              <p>
                                Using RLE coding, we actually double the storage
                                size needed, from 11 bytes to 22:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>1B1O1N1G1O1t1h1e1d1o1g</strong>
                              </p>
                              <p>
                                RLE algorithms are fast and simple. How well
                                they compress data depends upon what is being
                                encoded. Suppose you are encoding a picture of a
                                page in a book that you've just scanned. If the
                                page is mostly white then RLE will compress the
                                file very well because there will be lots of
                                runs of the same ASCII code for white. If the
                                page is mostly a busy colour photo, then there
                                will be far less runs of the same ASCII colour
                                code.
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

export default Run_length_encoding__RLE__for_lossless_compression;
