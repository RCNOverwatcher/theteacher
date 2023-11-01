import React from "react";

function Other_types_of_operating_system() {
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
                                Other types of operating system
                              </h1>
                              <p>
                                We have already looked at batch processing and
                                real time operating systems in some detail in
                                previous sections. There are a few other types
                                of classification of operating systems which
                                should know about.
                              </p>

                              <p>
                                <strong>Single-user operating system</strong>
                                <br />
                                This kind of operating system is designed for
                                one person to use at any one time. It is
                                typically designed to be used in computer
                                systems (such as Microsoft Windows, Mac OS and
                                Linux), tablets and mobile phones (such as
                                Windows Phone, Sailfish OS, Blackberry, Android
                                and Firefox OS). These kinds of operating
                                systems can often be set-up so that different
                                users can use it, each with their own account,
                                but only one user can use it at any one time.
                              </p>
                              <p>
                                <strong>Multi-user operating system</strong>
                                <br />
                                This is an operating system designed to be used
                                by many people at the same time. It is typically
                                found in networked systems and mainframes, where
                                multiple users on computers or terminals can
                                gain access to a single computer system with one
                                operating system on it. The operating system has
                                to monitor all of the jobs that each user wants,
                                load up into its memory the necessary
                                applications and manage the users accessing the
                                applications. The different users on a
                                multi-user operating system are accessing the
                                same single operating system, as opposed to a
                                set of computers on a network, each with their
                                own operating system. There is a large cost
                                saving for organisations using this kind of
                                system, not least because older computers can
                                still run very effectively on it. However, if
                                the main computer goes down, it can have an
                                impact on many different users and stop them
                                working.&nbsp;
                              </p>
                              <p>
                                <strong>Multi-tasking operating systems</strong>
                                <br />
                                These kinds of operating systems are able to
                                'multi-task'. That simply means that they can
                                have open many applications and can allow the
                                user to use them all at (apparently) the same
                                time. It is 'apparently' because the CPU can
                                only actually work on one application at a time,
                                but it can switch so quickly between multiple
                                applications that the user thinks that they are
                                listening to music, writing an email, using
                                their chat program and talking on Skye all at
                                the same time.
                              </p>
                              <p>
                                <strong>
                                  Multi-programming operating systems
                                </strong>
                                <br />A computer that can&nbsp;
                                <span style="line-height: 16.3636360168457px">
                                  have open many applications and can allow the
                                  user to use them all at (apparently) the same
                                  time is also known as a 'multi-programming'
                                  system. Multi-programming environments open
                                  many different applications in memory and then
                                  cycle between them all to run them. Each
                                  application gets a small slice of the CPU's
                                  time before it is stopped. Then where it is up
                                  to is saved and then the next application is
                                  started from wherever it finished off last
                                  time, and is given a small slice of the CPU's
                                  time. All applications are given a slice of
                                  CPU time in this cycle and so the CPU is kept
                                  as busy as possible.
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    There is a subtle difference between
                                    multi-programming and multi-tasking although
                                    they are often used interchangeably.
                                    Multi-tasking is a general term describing
                                    the user using and interacting with many
                                    applications at apparently the same time.
                                    It's all about the user interacting with
                                    those programs they are using. In
                                    multi-programming, we are not talking about
                                    the user interacting with the applications.
                                    This is purely the operating system making
                                    sure that the CPU is working as hard as
                                    possible on all jobs that have to be done by
                                    giving each job a slice of CPU time in a
                                    'round-robin' cycle (or in another order
                                    determined by a different algorithm).
                                  </span>
                                </span>
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

export default Other_types_of_operating_system;
