import React from "react";

function Dealing_with_collisions() {
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
                              <h1
                                class="ContentHeading"
                                style="text-align: center"
                                align="center"
                              >
                                Dealing with collisions
                              </h1>
                              <p class="NormalContent">&nbsp;</p>
                              <p style="display: inline !important">
                                <strong>
                                  Good hashing algorithms
                                  <br />
                                </strong>
                                Creating a random file is an excellent way of
                                creating a fast access file structure. You do
                                need, of course, a direct access storage device,
                                not a magnetic tape, for example. You also need
                                to ensure that you have a 'good' hashing
                                algorithm. The one above is very poor indeed
                                because there will be lots of different surnames
                                that give the same memory address! This is
                                called a 'clash' or 'collision'. You need to
                                design a hashing algorithm that minimises
                                clashes because they slow down access times. On
                                the other hand, an algorithm might also spread
                                out the data so much that large areas of storage
                                are used up! Having large areas of storage that
                                aren't used efficiently is known as
                                ‘redundancy’. A further consideration is the
                                hashing algorithm itself. It mustn’t be so
                                complicated that it takes ages to calculate
                                anything!
                                <strong>
                                  <br />
                                </strong>
                              </p>

                              <div>
                                <p>A good hashing algorithm will:</p>
                                <ul>
                                  <li style="list-style-type: none">
                                    <ul style="list-style-type: disc">
                                      <li>Minimise clashes.</li>
                                      <li>
                                        Ensure that the hash codes of data
                                        aren't spread too far apart, wasting
                                        memory.
                                      </li>
                                      <li>Be quick to calculate.</li>
                                    </ul>
                                  </li>
                                </ul>
                                <p>
                                  <strong>Dealing with clashes</strong>
                                  <br />
                                  Some clashes (collisions) are inevitable. When
                                  they do happen, there are two techniques that
                                  can be used to deal with the situation:
                                </p>
                                <ol>
                                  <li style="list-style-type: none">
                                    <ol>
                                      <li>
                                        The computer can still go to the memory
                                        address that was calculated by the
                                        hashing algorithm. It then starts
                                        searching sequentially from that point
                                        to either find the data that it was
                                        searching for or to store the data it
                                        wanted to store.
                                      </li>
                                      <li>
                                        The computer can set-up an overflow
                                        area. When there is a clash, the
                                        computer can jump to this special area
                                        to either find the data that it was
                                        searching for or to store the data it
                                        wanted to store.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </div>
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

export default Dealing_with_collisions;