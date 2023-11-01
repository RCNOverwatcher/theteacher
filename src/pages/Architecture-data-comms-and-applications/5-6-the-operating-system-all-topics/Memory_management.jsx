import React from "react";

function Memory_management() {
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
                                Memory management
                              </h1>
                              <p>
                                <strong class="NormalContentHeading">
                                  Introduction
                                  <br />
                                </strong>
                                It is important for a computer to use all of the
                                fixed-size resources wisely. You want the CPU to
                                work as hard as possible and you want to make
                                the best use of your cache and main memory, for
                                example. We will now look in more detail at how
                                the main memory is managed to get the most from
                                it.
                              </p>
                              <p>
                                Main memory typically is split into two
                                partitions. One, called Low Memory, is where the
                                operating system is placed. The other, called
                                High Memory, is where the processes that need to
                                be run are put. Processes are simply the jobs
                                that have to be carried out by the Central
                                Processing Unit. These will include running
                                applications but also jobs that have to be done
                                in the background, such as managing the input
                                and output to a printer or speakers, for
                                example. All the processes that need to be run
                                are put in a queue.
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Partitions and fragmentation
                                  <br />
                                </strong>
                                Operating systems can manage the main memory in
                                a number of ways, including using partitions,
                                paging and segmentation. With partitions, the
                                main memory is divided up into areas, which can
                                be a fixed size or a variable size. Each process
                                in the queue is allocated to one partition,
                                assuming that the process can fit in the
                                partition. If it can't, then parts of the
                                process have to be switched in and out of the
                                partition as and when necessary. When a
                                partition is free, another process from the
                                queue is passed to the partition, until the
                                process is finished and the partition is freed
                                up again.&nbsp;
                              </p>
                              <p>
                                A process will use up an entire partition,
                                whether it needs the entire partition or not.
                                This is one inefficent problem with this method,
                                although having a number of different sized
                                partitions for the operating system to select
                                from can decrease this problem because you can
                                then assign a process to the smallest partition
                                that it will fit in. As processes are loaded and
                                removed from partitions, the memory can become
                                fragmented and some areas of memory will be
                                unused. This is an inefficient use of
                                resources.&nbsp;
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Page tables
                                </strong>
                                <br />
                                Another method of managing the memory is to use
                                paging. Each application will have associated
                                with it a page table. This will identify each
                                page for each application and will contain
                                information about where to find that page if it
                                is on the hard disk in virtual memory. If a page
                                is in RAM then the entry for that particular
                                page will be blank. When a page is needed, the
                                operating system looks up the page reference in
                                the page table, finds out where it is in virtual
                                memory and then transfers it from the hard disk
                                to the primary memory.
                              </p>
                              <p>
                                This, of course, all takes time and contributes
                                to the computer slowing down. This kind of
                                tracking system for pages is relatively simple
                                to implement but there are some disadvantages.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Paging is a simple system to implement but
                                      may not be the most efficient. This is
                                      because the pages are of a fixed size. A
                                      page may only have a small amount of data
                                      in it but will require a whole page to
                                      store it in.
                                    </li>
                                    <li>
                                      Pages are fixed sizes. They will contain
                                      code that may not be a logical group of
                                      code (for example, a logical block of code
                                      such as a function might run across 6
                                      different pages). This means that to load
                                      that particular function will require 6
                                      pages to be loaded up, which is not as
                                      efficient as loading e.g. one page for the
                                      whole function.
                                    </li>
                                    <li>
                                      Page tables are typically large and
                                      accessing them slows down the computer.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong class="NormalContentHeading">
                                  Segmentation
                                </strong>
                                <br />
                                An alternative approach is to use segmentation.
                                Instead of pages being a fixed size, they are a
                                variable size. Because their size can vary, code
                                can be logically grouped into one segment. You
                                could have a segment per procedure, for example,
                                and this would reduce the size of the tables
                                needed to store the segment information. The
                                downside to segmentation is that retrieving a
                                segment is more complicated. You need to store
                                both the start address of a segment and the size
                                of the segment. Start addresses have to be
                                calculated with care because the sizes of each
                                segment varies. With paging, it is entirely
                                predictable where each page starts and finishes.
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

export default Memory_management;