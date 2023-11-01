import React from "react";

function Maintenance() {
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
                                Maintenance
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    What is 'maintenance'?
                                  </span>
                                </strong>
                                <br />
                                Maintenance is the term used to describe
                                changing a system after it has been designed,
                                installed and has been running for a time.
                                Software products have a limited lifespan. There
                                will come a time when they need to be revisited
                                and code changed for a variety of reasons, some
                                of which are given in the list below. One of the
                                reasons why so much documentation is needed when
                                designing a new system is that any future
                                maintenance will undoubtedly be required. It is
                                very likely, however, that the person
                                maintaining a system will not be the same person
                                who originally designed and built it.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Situations that trigger modifications
                                  </span>
                                </strong>
                                <br />
                                System maintenance may be required for a wide
                                range of reasons.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li class="NormalContent">
                                      A user has discovered a bug in a program.
                                      This needs to be rectified.
                                    </li>
                                    <li class="NormalContent">
                                      The law has changed. The system needs to
                                      be changed to ensure that it conforms to
                                      the new law.
                                    </li>
                                    <li class="NormalContent">
                                      New technology. Some new technology has
                                      come into being which has provided new
                                      opportunities. The system needs to be
                                      modified to take advantage of these new
                                      opportunities.
                                    </li>
                                    <li class="NormalContent">
                                      A new function is needed. The company may
                                      decide that they would like the system to
                                      do something that it cannot currently do
                                      so the system needs to be modified.
                                    </li>
                                    <li class="NormalContent">
                                      The business has 'outgrown' the system.
                                      For example, a business may have expanded
                                      and now needs to be able to handle far
                                      more data than it used to do.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                There are three common classifications of
                                maintenance, perfective, adaptive and
                                corrective.
                              </p>
                              <p>
                                <strong>Perfective maintenance</strong>
                                <br />
                                This type of maintenance is when an existing
                                system is improved. A complete re-write is not
                                necessary, but some things are changed to
                                improve the system. Examples might include
                                redesigning user screens, improving the code to
                                speed up actions, adding helpful tool tips and
                                links to external sources of Internet help,
                                removing any features that aren't used to
                                simplify the overall user experience and so on.
                              </p>
                              <p>
                                <strong>Adaptive maintenance</strong>
                                <br />
                                This kind of maintenance is the classification
                                for changes needed to keep the system
                                up-to-date. If changes in new technology needed
                                to be introduced, this would be adaptive
                                maintenance, for example, if employees had to
                                log in by using biometrics rather than a login
                                and password. If new laws on privacy meant that
                                certain types of data couldn't be kept, the
                                system would have to be changed to accommodate
                                this. That would be adaptive maintenance.
                              </p>
                              <p>
                                <strong>Corrective maintenance</strong>
                                <br />
                                This kind of maintenance is done to ensure
                                errors and bugs are corrected. For example, if
                                an employee reports that a function isn't
                                working correctly, or in certain circumstances,
                                something doesn't work properly then that would
                                involve corrective maintenance. Most systems
                                have a formal way for staff to report problems,
                                which would identify areas for corrective
                                maintenance. There will also be automatically
                                generated error logs and these too can highlight
                                areas where corrective maintenance needs to be
                                carried out. If a problem was reported that
                                caused a security issue, a 'patch' would be
                                written and applied to the software. This is
                                another example of corrective maintenance.
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

export default Maintenance;
