import React from "react";

function Program_version_management() {
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
                                Program version management
                              </h1>
                              <p class="NormalContent">
                                <strong class="NormalContentHeading">
                                  Introduction
                                </strong>
                                <br />
                                The same person in a team may work on one
                                particular document at many different times.
                                They may work on one document in the office,
                                back it up on a pen drive, take it home and then
                                work on it there. There are now two different
                                versions of the same document. If they forget
                                the pen drive in the morning, and then go to
                                work, take a copy of the work-based document and
                                then carry on working on the document using that
                                version at work, you now have a very confusing
                                set of different versions of the same document,
                                none of which have all of the latest information
                                on! If you then add to that, the fact that a
                                <span style="line-height: 16.3636360168457px">
                                  &nbsp;single project is usually worked on by
                                  many members in a team, sometimes hundreds of
                                  different people and sometimes scattered
                                  across the world, you can see that, all
                                  producing a variety of different documents and
                                  all sharing documents with other members of
                                  the team, you can see that there is a
                                  potential problem. It is very easy for a team
                                  member to be working on something but be using
                                  information from out-of-date documents. This
                                  applies particularly to software teams
                                  producing a software product.
                                </span>
                              </p>

                              <p>
                                <strong>
                                  Software production and version control
                                </strong>
                                <br />
                                Because of the problems associated with the
                                production of different versions of software,
                                companies have clear procedures on how code
                                production will be controlled. This is called
                                'version management' and everyone involved in
                                any particular project has a responsibility to
                                follow the procedures. The procedures will
                                typically specify:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      <strong>
                                        how all sections of code are to be named
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        how the current code is to be clearly
                                        identified
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        who &nbsp;needs to be informed if there
                                        are changes to some code
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        how and when changes to a section of
                                        code is to be documented
                                      </strong>
                                    </li>
                                    <li>
                                      <strong>
                                        how code is to be stored and backed up.
                                      </strong>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                As different versions of the same section of
                                code are produced, they start to form a set of
                                back-ups, which can be used to roll back a
                                project to an earlier version if necessary, or
                                to recover some code that has been lost for some
                                reason.&nbsp;
                              </p>
                              <p>
                                <strong>
                                  Working on documents or a section of code at
                                  the same time
                                </strong>
                                <br />
                                There are different techniques in use when more
                                than one programmer needs to work on the same
                                block of code. The most common method used is
                                that a programmer 'checks out' and temporarily
                                'owns' a programming file. They then have the
                                right to open, view, edit and delete the
                                contents of the file. Other programmers can
                                access the file but they only have the right to
                                open and view the file. They can only open,
                                view, edit and delete the contents once they
                                have checked it in, when the other programmer
                                has finished and released the file for someone
                                else to use.
                              </p>
                              <p>
                                More tricky is a system where two people can
                                check out and work on the same file at the same
                                time. When they have finished, the changes from
                                both files are merged. This is not a perfect
                                science and really only useful for simple
                                text-based documents, not code. What a
                                programmer can do is to take their own copy of
                                some code temporarily, and then manually merge
                                it to the file when the other programmer has
                                finished making any of their changes.
                              </p>
                              <p>
                                <strong>School projects</strong>
                                <br />
                                When you start any project at school, you should
                                always have a system for version control, to
                                ensure that you can never lose more than 30
                                minutes of your work. If something catastrophic
                                happens, such as the hard drive on you computer
                                at home completely fails, or your laptop is
                                stolen, or you spill coffee into your laptop and
                                it stops working, or you lose your pen drive,
                                for example, you can always recover the work you
                                have already done. A very simple version control
                                strategy that you can employ is to always
                                include the date in the file name. If you are
                                working on a document over many days or weeks,
                                then open it up and re-save it immediately with
                                the date in the file name and use that version,
                                not the original. In this way, you will start to
                                create a set of versions you can use if
                                necessary. For example:
                              </p>
                              <p>
                                Evaluation 21/09/15
                                <br />
                                Evaluation 22/09/15
                                <br />
                                Evaluation 26/09/15
                                <br />
                                Evaluation 30/09/15
                              </p>
                              <p>
                                Then save it every 30 minutes you are working on
                                it onto a pen drive.
                              </p>
                              <p>
                                <strong>Cloud storage</strong>
                                <br />
                                An even better strategy is to store your work
                                onto cloud storage and use the version there.
                                Most companies offering cloud storage such as
                                Dropbox will automatically back-up your work for
                                you and keep different versions of the same
                                document as you make them. You can then roll
                                back or recover documents whenever you have to.
                                Sometimes, this is time-limited, unless you pay
                                a fee. It is almost impossible to lose work as
                                it is kept encrypted and on different servers
                                across the world. Of course, there is always the
                                danger of a hacker causing damage, a rogue
                                employee stealing or deleting data or the
                                company going bankrupt overnight.&nbsp;
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

export default Program_version_management;