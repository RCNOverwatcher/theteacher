import React from "react";

function Safety_critical_systems() {
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
                                Safety-critical systems
                              </h1>
                              <p>
                                <strong>
                                  Introduction
                                  <br />
                                </strong>
                                Most control systems are time-critical. They
                                need things to happen quickly. They also need
                                things to happen reliably. So when, for example,
                                a pilot steers a plane to the left, the plane
                                should move to the left, quickly and every time!
                                Applications such as&nbsp;these are written in
                                purpose-designed software languages. ADA is one
                                such example. It is a language that has its
                                roots in Pascal. It has features that make it
                                suitable for real-time applications. For
                                example, it can deal with concurrent events and
                                can&nbsp;be used in parallel processing
                                architectures. Parallel processing might be
                                needed if there is a lot of data and it cannot
                                be processed within the required time by one
                                processor. By using parallel processors, you can
                                split the program up and run&nbsp;different
                                parts of it at the same time. You can also use
                                parallel processing to build into the system
                                some backup systems (sometimes called ‘fail-safe
                                systems’), in case the main one fails.
                              </p>
                              <p>
                                <strong>
                                  Features of safety-critical systems
                                </strong>
                                <br />
                                It is possible to identify some features of
                                real-time software as used in applications such
                                as a plane's control systems.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      The output times are predictable within
                                      specified limits. This is important. When
                                      you use your computer at school and send
                                      something to print or start multi-tasking,
                                      then the speed that your computer will
                                      work at slows and slows unpredictably. In
                                      many real-time systems, it is important to
                                      be able to specify that XXX will happen
                                      within YYY milliseconds, regardless of
                                      whatever else is happening in the system,
                                      regardless of any interrupts that might
                                      occur.
                                    </li>
                                    <li>
                                      Backup systems will have been incorporated
                                      into both the software and hardware. If
                                      ever something fails in the system, there
                                      will be a backup system ready to take over
                                      immediately.
                                    </li>
                                    <li>
                                      The software is very fast! It will have
                                      been designed and written so that it runs
                                      at the optimum speed.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Designing safety-critical systems is a highly
                                specialised software engineering area, requiring
                                knowledge and skills in such areas such as
                                parallel programming and the ADA programming
                                language.
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

export default Safety_critical_systems;