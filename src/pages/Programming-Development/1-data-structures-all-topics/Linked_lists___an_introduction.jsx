import React from "react";

function Linked_lists___an_introduction() {
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
                                Linked lists - an introduction
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                A linked list is an example of a data structure,
                                a structure that a programmer sets up in code.
                                Once set up, the programmer can then add data to
                                it, search for data in it and find data in it to
                                amend or delete. Linked lists are dynamic data
                                structures - they shrink and grow, depending on
                                how much data needs to be stored. They can be an
                                almost unlimited size, although they are often
                                set up inside an array, which is in some
                                programming languages a fixed size.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  How linked lists work
                                  <br />
                                </strong>
                                A programmer wants to store a list of fish
                                alphabetically in a linked list data structure.
                                We want to store Carp, Perch, Roach and Shark.
                                Below is an illustration of how the computer
                                works with a linked list.&nbsp;The programmer
                                will initialise the data structure in the
                                program (in pseudo-code below) but they will
                                have no idea what actual memory locations are
                                selected by the computer when the program is
                                translated. For illustration purposes, however,
                                we will&nbsp;select a range of memory addresses.
                                We will select a range of memory addresses only
                                to illustrate that, in a linked list,
                                the&nbsp;individual pieces of data can be all
                                over the available RAM!
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      The computer will store the beginning of
                                      the list in an area of RAM we will call
                                      the Head of Lists.
                                    </li>
                                    <li>
                                      We will call the memory location that
                                      holds where to find the first piece of
                                      data the START(FISH).
                                    </li>
                                    <li>
                                      If the computer looks at the contents of
                                      the START memory location, it will show it
                                      the memory location of&nbsp;the first
                                      node. A node is a piece of data plus the
                                      address of the next node. It’s memory
                                      location 2300!
                                    </li>
                                    <li>
                                      The computer can then go to memory
                                      location 2300, and it will find the data
                                      item Carp!
                                    </li>
                                    <li>
                                      Not only that, however. It will also find
                                      the memory location of the next piece of
                                      data, 400.
                                    </li>
                                    <li>
                                      If the computer goes to memory location
                                      400, it will find the next node; it will
                                      get the next piece of data,&nbsp;Perch, as
                                      well as the memory location of the next
                                      piece of data, 9930, and so on.
                                    </li>
                                    <li>
                                      At some point the computer will get to the
                                      end of the list. When it gets to the last
                                      piece of data, the pointer&nbsp;at that
                                      node is given a null value - it is given a
                                      value that is not a valid memory address
                                      e.g. XXX
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                If you are having trouble working out what is
                                going on, then a diagram might help!
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <img
                                    style="
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/ecf4ef39-f48b-41d1-9d24-927ec01b2704llista.GIF"
                                    alt="llista"
                                  />
                                </strong>
                              </p>
                              <p>
                                A diagram showing a linked list is characterised
                                by 4 things:
                                <br />
                                <br />
                                &nbsp; &nbsp; &nbsp;1) The head of the list.
                                (This points to the first node).
                                <br />
                                &nbsp; &nbsp; &nbsp;2) Pointers to nodes. (They
                                either point at the next place to look for a
                                node or contain a null value).
                                <br />
                                &nbsp; &nbsp; &nbsp;3) Nodes (A node is a memory
                                location that contains a piece of data and
                                another memory location).
                                <br />
                                &nbsp; &nbsp; &nbsp;4) A null pointer. (This
                                indicates the end of the list. We have used
                                XXX).
                              </p>
                              <p>
                                Note also that linked lists can make use of any
                                spare memory addresses going. If, for example,
                                the computer had two&nbsp;applications running
                                in RAM, separated by a couple of empty RAM
                                addresses, it could make use of that little bit
                                of memory in a&nbsp;linked list. The memory
                                addresses don't have to be next to each other.
                                Linked lists can help a computer ensure that
                                memory is used wisely!
                              </p>
                              <p>
                                <strong>Algorithms for linked lists</strong>
                                <br />
                                When you store sets of data, whether the data
                                structure is an array, a linked list or any
                                other structure, there will be times
                                when&nbsp;you need to do things with it! For
                                example, you might want to:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>Search for a data item.</li>
                                    <li>Add a data item.</li>
                                    <li>Delete a data item.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                It would be useful to write algorithms to
                                describe how we could do the above. We know that
                                an algorithm is simply&nbsp;a set of
                                step-by-step instructions that describe how to
                                do a particular task. Algorithms can be written
                                in semi-English, or&nbsp;pseudo-code! When
                                writing algorithms, you should first concentrate
                                on getting the logic correct and then start
                                dealing with any special cases.
                              </p>
                              <p>
                                <strong>
                                  Searching for a data item in a linked list
                                </strong>
                                <br />
                                To search for a data item ALPHA in a linked
                                list, we could write out a description.
                              </p>
                              <p>
                                <strong>
                                  <em>
                                    Start by getting the pointer in the Head of
                                    Lists. Then we need to test the pointer to
                                    see if&nbsp;it is the null pointer – it
                                    might be an empty list. If it is, we need to
                                    report that the list is&nbsp;empty and stop.
                                    If it isn’t, we need to follow the pointer
                                    to the first node. (Remember, a&nbsp;node
                                    contains a data item and another pointer).
                                    We need to look at the data item at
                                    that&nbsp;node. Is it the one that we are
                                    looking for? If it is, then we can report
                                    that we have found&nbsp;the data item and
                                    stop. If it isn’t we need to get the pointer
                                    at the node. We then check it&nbsp;because
                                    if that pointer is the null pointer we need
                                    to report that the data item we
                                    are&nbsp;looking for is not in the list and
                                    stop. If it isn’t the null pointer, we need
                                    to go to the node&nbsp;pointed at by this
                                    pointer and repeat. We keep doing this until
                                    either we find the data&nbsp;item or we come
                                    to the end of the list.
                                  </em>
                                </strong>
                              </p>
                              <p>
                                There is nothing wrong with the above
                                description, although it is not so easy to code
                                up into a programming language
                                because&nbsp;there is no indication of
                                programming structure in the description. It is
                                written as an English paragraph. If we use
                                pseudo-code,&nbsp;however, we can use
                                programming structures, which makes converting
                                the design into real code easy! On top of that,
                                pseudo-code is language-independent. That means
                                a programmer expert in any language should
                                easily be able to convert pseudo-code&nbsp;into
                                their particular language. With pseudo-code, we
                                can make up any keywords we like so long as they
                                broadly describe what&nbsp;we want to do. An
                                algorithm written in pseudo-code to search for
                                an item in a list might look like the following.
                                As you study&nbsp;the algorithm, there are a
                                number of things to note about it:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Some Boolean variables have been used to
                                      store whether some events have happened or
                                      not.
                                    </li>
                                    <li>
                                      All IF and WHILE statements have a
                                      corresponding ENDIF or ENDWHILE statement
                                      to aid clarity.
                                    </li>
                                    <li>
                                      Programming constructs were used to aid
                                      the step from pseudo-code to writing in
                                      actual code.
                                    </li>
                                    <li>
                                      Indentation, meaningful variable names and
                                      comments help the reader follow the logic
                                      of the code.
                                    </li>
                                    <li>
                                      Special cases e.g. if the list is empty in
                                      the first place, if data isn't present in
                                      the list.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                Here is the algorithm. See if you can follow it:
                              </p>
                              <p>
                                <img
                                  src="images/eff52dab-264a-47b6-8ef5-17c0ebc4c898llistc.GIF"
                                  alt="llistc"
                                />
                              </p>
                              <p>
                                <strong>
                                  Adding a data item to a linked list
                                </strong>
                                <br />
                                The following algorithm describes how to add a
                                new data item BETA to a linked list.
                              </p>
                              <p>
                                <img
                                  src="images/29e4523f-91d9-4b3e-9f49-b532503f143cllistd.GIF"
                                  alt="llistd"
                                />
                              </p>
                              <p>
                                For example, suppose the computer needed to add
                                Salmon to the linked list of Fish. The computer
                                inserts Salmon in memory
                                <br />
                                location 850. A diagrammatic representation of
                                the result would look like this:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/594f4e7a-eabd-4727-8dd9-5425e86ee05clliste.GIF"
                                  alt="lliste"
                                />
                              </p>
                              <p>
                                Notice how the pointer at Roach's node has been
                                changed to point to Salmon's location, and the
                                pointer for Salmon has been set&nbsp;to the
                                memory location that was pointed to by Roach's
                                node.
                              </p>
                              <p>
                                <strong>
                                  Deleting a data item from a linked list
                                </strong>
                                <br />
                                The following is an algorithm for deleting an
                                item in a linked list.
                              </p>
                              <p>
                                <img
                                  src="images/0c399ca7-3946-46b2-822b-7297997bba61llistf.GIF"
                                  alt="llistf"
                                />
                              </p>
                              <p>
                                For example, suppose the computer needed to
                                delete Perch from the linked list of Fish. This
                                diagram describes the process.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/e06840f5-843d-48b9-b2e5-a42f02f44de7llistg.GIF"
                                  alt="llistg"
                                />
                              </p>
                              <p>
                                Notice that Perch is still in memory location
                                400. It's just that no pointer points to it
                                anymore so it is not part of the linked
                                list.&nbsp;The computer will keep a record of
                                memory locations that have been freed up, and
                                may at some point overwrite the contents
                                of&nbsp;those memory locations when they are
                                needed again. Also notice that the pointer in
                                the node Carp has now changed. Some&nbsp;further
                                points about linked lists.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li>
                                      Inserting data and deleting data is
                                      straightforward compared to arrays. If you
                                      are storing data in an array&nbsp;in an
                                      organised manner and you want to insert or
                                      delete an item, then you need to actually
                                      move the data&nbsp;items in the array to
                                      new locations to maintain the proper
                                      order. You don't have to do this with
                                      linked lists.&nbsp;You just find the
                                      appropriate place and then adjust
                                      appropriate pointers.
                                    </li>
                                    <li>
                                      To find a piece of data in a linked list,
                                      you have to traverse through all the nodes
                                      in a serial fashion. This&nbsp;can be slow
                                      compared to a direct access data
                                      structure, such as an array.
                                    </li>
                                    <li>
                                      Linked lists grow and shrink depending on
                                      how much data is stored. There are no
                                      blocks of memory that&nbsp;have been
                                      reserved in RAM as there are with arrays.
                                      Linked lists therefore use RAM more
                                      efficiently.
                                    </li>
                                    <li>
                                      With arrays, you reserve space when the
                                      program is compiled. This doesn't happen
                                      with linked lists. It's&nbsp;possible you
                                      might not be able to store what you want
                                      to with a linked list data structure!
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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

export default Linked_lists___an_introduction;
