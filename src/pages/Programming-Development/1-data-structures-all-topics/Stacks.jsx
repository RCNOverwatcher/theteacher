import React from "react";

function Stacks() {
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
                              <h1 style="text-align: center">Stacks</h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  How the stack works
                                  <br />
                                </strong>
                                Stacks are another example of a dynamic data
                                structure, and like queues, they can be
                                implemented within an array. Unlike queues,
                                however, data is put into the structure and
                                removed from the structure at the{" "}
                                <strong>same</strong> end of the structure.
                              </p>

                              <p align="center">
                                &nbsp;
                                <img
                                  src="images/6107f96e-5011-4165-b76f-965f522d324cc.gif"
                                  alt
                                />
                              </p>
                              <p align="left">
                                Like queues, the data cannot be accessed
                                directly in a stack - you cannot go straight to
                                the middle of a set of data items and retrieve
                                it. You have to remove other data items first.
                                You can think of a stack as lots of CDs stored
                                on a spindle. You put CDs on the spindle, and to
                                remove them you take them off in reverse order.
                                In fact, this kind of device is known as a Last
                                In First Out (LIFO) device because unlike a
                                queue, the last item put into the stack is the
                                first item to be removed. To implement a stack
                                in an array, you need a TOP pointer to point to
                                the top of the stack. An empty stack has TOP =
                                0. When you put a data item on to the stack, you
                                talk about it being ‘pushed’ onto the stack.
                                When you remove an item, you say it is ‘popped’
                                from the stack. We will use an array that can
                                hold up to 6 data items as before.
                                <span style="line-height: 1.5">&nbsp;</span>
                              </p>
                              <p>
                                <strong>Step 1:</strong> The stack is empty. TOP
                                = 0
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 2: </strong>Firstly, The data item
                                Sheep is pushed onto the stack. Then Cow is
                                pushed onto the stack. TOP = 2
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Cow</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sheep</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 3:</strong> The data item Goat is
                                then pushed onto the stack. Then Chicken is
                                pushed onto the stack. TOP = 4
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Chicken</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Goat</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Cow</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sheep</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 4: </strong>The data item Chicken
                                is then popped from the stack. TOP = 3
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Goat</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Cow</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sheep</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 5:</strong> The data item Horse is
                                pushed onto the stack. Then Duck is pushed onto
                                the stack. TOP = 5
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Duck</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Horse</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Goat</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Cow</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sheep</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                <strong>Step 6: </strong>We want to now remove
                                three items. Remember that items are removed
                                from the stack in the reverse order that they
                                were put onto the stack. So Duck comes off
                                first, then Horse, and finally Goat. TOP = 2
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>6</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>5</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>4</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>3</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>&nbsp;</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>2</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Cow</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="38">
                                        <p align="center">
                                          <strong>1</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="109">
                                        <p align="center">
                                          <strong>Sheep</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                Of course, if the stack becomes full, you can't
                                store any more data in it! If you tried to store
                                another data item in a structure that was full
                                you would get an overflow error message. An
                                overflow happens when you try to store data in a
                                data structure that is full. It can also be used
                                to describe the error that occurs when you try
                                to store a number that is too big for the space
                                reserved for it. For example, if you try to
                                store 452 in one byte you will get an overflow
                                error message because the maximum number that
                                can be stored in one byte is 255.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Algorithms for adding and removing items to
                                  and from a stack
                                </strong>
                                <br />
                                So far, we have simply added and removed items
                                from our queue and stack. If we wanted to use a
                                programming language to actually program these
                                operations, we would first want to describe what
                                needs to happen using an algorithm. We will use
                                some pseudo-code to describe how to push an item
                                onto a stack, and how to remove an item from the
                                stack.
                              </p>
                              <p>
                                <strong>
                                  Algorithm for pushing an item on to the stack
                                </strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  Check if the stack is full (pointer = maxSize)
                                </strong>
                                <br />
                                <strong> IF the stack is full, THEN</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp; REPORT full and STOP
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>&nbsp;&nbsp; INCREMENT pointer</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp; INSERT Data into position pointed
                                  to by the pointer
                                </strong>
                                <br />
                                <strong> ENDIF</strong>
                                <br />
                                <strong>STOP</strong>
                              </p>
                              <p>
                                <strong>
                                  Algorithm for popping an item from the stack
                                </strong>
                              </p>
                              <p
                                class="NormalContentHeading"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  Check if stack is empty (pointer=0)
                                </strong>
                                <br />
                                <strong> IF empty, THEN</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp; REPORT empty and STOP
                                </strong>
                                <br />
                                <strong> ELSE</strong>
                                <br />
                                <strong>
                                  &nbsp;&nbsp; Temp := data pointed to by
                                  pointer Temp is a variable to hold the popped
                                  data
                                </strong>
                                <br />
                                <strong>&nbsp;&nbsp; DECREMENT pointer</strong>
                                <br />
                                <strong> ENDIF</strong>
                                <br />
                                <strong>STOP</strong>
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  The use of the stack when an interrupt happens
                                </strong>
                                <br />A CPU might be working on a program when
                                an interrupt happens. An interrupt is a signal
                                from a piece of software or hardware to the CPU
                                that tells it that it needs some processing
                                time. For example, if the floppy disk drive unit
                                has a problem, an interrupt will be sent to the
                                CPU to say "There is a problem - can you run
                                some software to deal with the problem?"
                              </p>
                              <p>
                                The CPU, then, is in the middle of something
                                when it receives an interrupt. If it decides to
                                deal with this interrupt immediately, it needs
                                to stop processing its current program (a CPU
                                can only do one thing at a time) but does need
                                to remember where it left off. This is so that
                                it can return to the correct place in the
                                program after it has serviced the interrupt. The
                                way it does this is to push all of its important
                                information (held in ‘registers’) onto the
                                stack. It then jumps to the interrupt handling
                                routine and runs the software to deal with the
                                interrupt. When it has finished dealing with the
                                interrupt, it pops all of the information it
                                stored in the stack back into the CPU’s
                                registers, and the CPU carries on from where it
                                was before. The use of the stack when an
                                interrupt happens is dealt with in much more
                                detail in a later section.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Using the stack for calculations
                                  </span>
                                </strong>
                                <br />
                                Calculations in computers are done using the
                                stack, using a technicque known as Reverse
                                Polish. You can find out about
                                <span class="NormalContentHeading">
                                  Reverse Polish Notation
                                </span>
                                and how it works just in 3.3.7.
                              </p>
                              <p>
                                <strong>
                                  The use of a stack to reverse a queue
                                </strong>
                              </p>
                              <p align="center">
                                <img
                                  src="images/5acaa7b0-088e-4f50-963a-da82a929a7b3f.gif"
                                  alt
                                />
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="text-align: center"
                                        valign="top"
                                        width="116"
                                      >
                                        <strong>Banana</strong>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Orange</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Apple</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Coconut</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Kiwi fruit</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Mango</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                Mango is at the front of the queue and banana is
                                at the back. In a queue, new items must join the
                                back of the queue and must leave from the front
                                (like a supermarket queue). Suppose you wanted
                                to reverse the order of the queue, so that
                                banana was at the front and mango at the back.
                                You could use a stack to do this.
                              </p>
                              <ol>
                                <li>
                                  Push all the items onto the stack, starting
                                  with the front of the queue, mango, then kiwi
                                  fruit etc until you push banana.&nbsp;
                                  <span style="line-height: 1.5">
                                    This gives you a stack that looks like this:
                                  </span>
                                </li>
                              </ol>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td valign="top" width="121">
                                        <p align="center">
                                          <strong>Banana</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="121">
                                        <p align="center">
                                          <strong>Orange</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="121">
                                        <p align="center">
                                          <strong>Apple</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="121">
                                        <p align="center">
                                          <strong>Coconut</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="121">
                                        <p align="center">
                                          <strong>Kiwi fruit</strong>
                                        </p>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td valign="top" width="121">
                                        <p align="center">
                                          <strong>Mango</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                &nbsp;2. Now pop all of the items out of the
                                stack back into the queue again! Banana is
                                popped first and is now at the head of the
                                queue. Then orange is popped and that joins the
                                queue at the back, behind banana. Then apple,
                                coconut, kiwi fruit and mango are popped in
                                turn. The queue now looks like this:
                              </p>
                              <p align="center">
                                <img
                                  src="images/b8534620-0051-4873-a445-d0f074f7c557g.gif"
                                  alt
                                />
                                <br />
                                &nbsp;
                              </p>
                              <div align="center">
                                <table
                                  border="1"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="text-align: center"
                                        valign="top"
                                        width="116"
                                      >
                                        <strong>Mango</strong>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Kiwi fruit</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Coconut</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Apple</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Orange</strong>
                                        </p>
                                      </td>
                                      <td valign="top" width="116">
                                        <p align="center">
                                          <strong>Banana</strong>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <p>
                                We have now completely reversed the order of the
                                queue.
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

export default Stacks;
