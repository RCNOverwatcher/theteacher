import React from "react";

function A_simple_introduction_to_hash_tables() {
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
                                A simple introduction to hash tables
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                A hash table is a type of data structure. You
                                apply a Maths formula to a piece of data that
                                you want to store. This generates a number,
                                which corresponds to a position in a hash table.
                                Hash tables are very fast because you can
                                calculate and then go to a piece of data you
                                want to find, without having to search
                                sequentially through lots of other pieces of
                                data to get to it.
                              </p>

                              <p>
                                <span style="line-height: 1.5">
                                  <strong>
                                    An example of how hash tables work&nbsp;
                                  </strong>
                                  <br />
                                </span>
                                A database of pupils is going to be organised
                                using a hash table. This file structure has been
                                chosen because the database will&nbsp;be used to
                                deal with pupil/parent enquiries and so needs to
                                retrieve each record quickly.&nbsp;The secretary
                                dealing with enquiries will type in a pupil's
                                surname to get their data back. The database
                                designer has selected the&nbsp;following maths
                                formula, known as a ‘hash algorithm’:&nbsp;
                              </p>
                              <p>
                                <strong>
                                  <em>
                                    When a surname is typed in, convert each
                                    letter of the surname into a&nbsp;number,
                                    and then add the numbers together to give an
                                    address. Convert&nbsp;letters to numbers
                                    using A=1, B=2, C=3 ... X=24, Y=25, Z=26.
                                  </em>
                                </strong>
                              </p>
                              <p>
                                For example, when the secretary types Jones,
                                this is converted into 10 + 15 + 14 + 5 + 19 =
                                63. The computer goes to memory&nbsp;address 63
                                and there's the start of the record!&nbsp;If you
                                wanted to store ‘Jones’ instead, you would work
                                out the memory address you are going to store
                                the data in by applying&nbsp;the hashing
                                algorithm to the data.&nbsp;This is a
                                much-simplified example but does illustrate the
                                basic idea. It is a way of converting a request
                                for a file into an address,&nbsp;so the record
                                can be retrieved immediately, without having to
                                go through other records.
                              </p>
                              <p>
                                <strong>Good hashing algorithms</strong>
                                <br />
                                Creating a hash file is an excellent way of
                                creating a fast access file structure. You do
                                need, of course, a direct access
                                storage&nbsp;device, not a magnetic tape, for
                                example. You also need to ensure that you have a
                                'good' hashing algorithm. The one above
                                is&nbsp;very poor indeed because there will be
                                lots of different surnames that give the same
                                memory address! This is called a 'clash'
                                or&nbsp;'collision'. You need to design a
                                hashing algorithm that minimises clashes because
                                they slow down access times. On the
                                other&nbsp;hand, an algorithm might also spread
                                out the data so much that large areas of storage
                                are used up! Having large areas of&nbsp;storage
                                that aren't used efficiently is known as
                                ‘redundancy’. A further consideration is the
                                hashing algorithm itself. It mustn’t&nbsp;be so
                                complicated that it takes ages to calculate
                                anything!
                              </p>
                              <p>A good hashing algorithm will:</p>
                              <ul>
                                <li>Minimise clashes.</li>
                                <li>
                                  Ensure that the hash codes of data aren't
                                  spread too far apart, wasting memory.
                                </li>
                                <li>Be quick to calculate.</li>
                              </ul>
                              <p>
                                <strong>Dealing with clashes</strong>
                                <br />
                                Some clashes (collisions) are inevitable. When
                                they do happen, there are two techniques that
                                can be used to deal with the&nbsp;situation:
                              </p>
                              <p>
                                1) The computer can still go to the memory
                                address that was calculated by the hashing
                                algorithm. It then starts&nbsp;searching
                                sequentially from that point to either find the
                                data that it was searching for or to store the
                                data it wanted&nbsp;to store.
                                <br />
                                2) The computer can set-up an overflow area.
                                When there is a clash, the computer can jump to
                                this special area to&nbsp;either find the data
                                that it was searching for or to store the data
                                it wanted to store.
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

export default A_simple_introduction_to_hash_tables;