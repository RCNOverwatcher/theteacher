import React from "react";

function Defragmentation_utility() {
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
                                Defragmentation utility
                              </h1>
                              <p>
                                <strong>Defragmentation utility</strong>
                                <br />
                                When you save a file or program on your hard
                                disk or other storage device, it is tempting to
                                think that it is all saved together.
                              </p>

                              <p>
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/2ca696bf-87e2-4111-b1f6-189678df7835defrag.GIF"
                                  alt="defrag"
                                />
                                Unfortunately, that is not usually the case.
                                When you save a file, the operating system looks
                                at what space it has free on the hard drive and
                                then breaks up the file into chunks. It then
                                stores these chunks all over the hard disk, in
                                whatever spaces are available. As long as the
                                operating keeps track of where these chunks are,
                                it isn't usually a problem because of the speed
                                the CPU works at. Over time, however, if too
                                many files are spread over a disk, it will start
                                to take a long time to read those files back.
                                The hard drive is a mechanical device that has
                                moving parts. These moving parts have to move to
                                collect each chunk of a file when you want to
                                open it so that it can rebuild the file.The
                                operating system has a defragmentation utility
                                program that will reorganise these chunks so
                                that they are next to each other or as close to
                                each other as possible on the storage device.
                                This will make it faster to get back files and
                                also free up bigger spaces for files you save in
                                the future.
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

export default Defragmentation_utility;