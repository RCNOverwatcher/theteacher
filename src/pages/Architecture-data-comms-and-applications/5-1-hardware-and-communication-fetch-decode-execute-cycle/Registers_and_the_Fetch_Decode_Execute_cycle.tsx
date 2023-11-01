import React from "react";

function Registers_and_the_Fetch_Decode_Execute_cycle() {
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
                                Registers and the Fetch-Decode-Execute cycle
                              </h1>
                              <p>
                                <strong>Registers</strong>
                                <br />A Von Neumann CPU (the type of CPU you get
                                in nearly all personal computers) has a number
                                of 'registers'. These are very fast memory
                                circuits. You can think of each register as a
                                box which holds a piece of data useful to the
                                CPU. These pieces of data allow the CPU to
                                quickly 'fetch' and then 'decode' and then
                                'execute' the instuctions held in RAM that are
                                part of a program, one instruction at a time.
                              </p>

                              <p>
                                The registers you should know about include:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      <strong>Program Counter</strong>&nbsp;(PC)
                                      -&nbsp;this holds the address of the next
                                      instruction to be fetched and executed.
                                    </li>
                                    <li>
                                      <strong>
                                        Current Instruction Register
                                      </strong>
                                      &nbsp;(CIR) - this holds the current
                                      instruction being executed.
                                    </li>
                                    <li>
                                      <strong>Memory Address Register</strong>
                                      &nbsp;(MAR) - this holds the RAM address
                                      you want to read to or write from.
                                    </li>
                                    <li>
                                      <strong>Memory Data Register</strong>
                                      &nbsp;(MDR) - this holds the data you have
                                      read from RAM or want to write to RAM.
                                    </li>
                                    <li>
                                      <strong>Accumulators</strong>&nbsp;- these
                                      hold the data being worked on and the
                                      results of arithmetic and logical
                                      operations.
                                    </li>
                                    <li>
                                      <strong>Status Register</strong>&nbsp;-
                                      this holds information about the last
                                      operation e.g. whether the least sum done
                                      produced a negative result.
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Interrupt Register</strong>&nbsp;-
                                      this holds details about whether an
                                      interrupt has happened.
                                    </li>
                                    <li class="NormalContent">
                                      <strong>Index register</strong> - this is
                                      a very fast counter, that is used e.g.
                                      when you have to work though a block of
                                      data and need to keep track of which piece
                                      of data you are at.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContentHeading">
                                <strong>
                                  Using registers to execute an instruction in a
                                  program.
                                </strong>
                                <br />
                                <span class="NormalContent">
                                  Consider the following situation:
                                </span>
                              </p>
                              <p class="NormalContentHeading" align="center">
                                &nbsp;
                                <img
                                  src="images/af4ba5e9-8abc-4b8c-bf99-78c3969e837fa.gif"
                                  alt="Registers"
                                />
                              </p>
                              <p>
                                Note in the above that we have not used binary
                                either for the RAM address or the contents, to
                                make things easier to understand!
                              </p>
                              <p>
                                How are the registers used to read an
                                instruction in a program?
                              </p>
                              <p>
                                <strong>FETCH</strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The CPU reads the contents of the Program
                                      Counter to find the address of the next
                                      instruction to be fetched, decoded and
                                      executed. In our case 3254.
                                    </li>
                                    <li class="NormalContent">
                                      As soon as it is read, the PC increments.
                                      PC = PC + 1, or 3255
                                    </li>
                                    <li class="NormalContent">
                                      The contents of 3254 are then put on the
                                      MAR.
                                    </li>
                                    <li class="NormalContent">
                                      The address in the MAR is then located in
                                      RAM.
                                    </li>
                                    <li class="NormalContent">
                                      The contents of this address are moved to
                                      the MDR.
                                    </li>
                                    <li class="NormalContent">
                                      The MDR now holds the instruction that
                                      must be executed.
                                    </li>
                                    <li class="NormalContent">
                                      The instruction in the MDR is then copied
                                      to the CIR, as we will often need to use
                                      the MDR again to complete the executation
                                      of an instruction.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>DECODE</strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The contents of the CIR are divided. Part
                                      of the instruction might be an operation
                                      (like ADD) and part of the instruction
                                      might be data, or in our case, an address
                                      where data can be found, like 75567. The
                                      ADD part is known as the&nbsp;
                                      <strong>
                                        <em>OPERATOR</em>
                                      </strong>
                                      &nbsp;and the data part is known as
                                      the&nbsp;
                                      <strong>
                                        <em>OPERAND</em>
                                      </strong>
                                      .
                                    </li>
                                    <li class="NormalContent">
                                      The operator (ADD) is decoded by the
                                      Contol Unit in the CPU, so it knows what
                                      it has to do (ADD in our case).
                                    </li>
                                    <li class="NormalContent">
                                      The operand 75567 is put back on the MAR.
                                    </li>
                                    <li class="NormalContent">
                                      The contents of 75567 is then found in RAM
                                      and put on the MDR.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>EXECUTE</strong>
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li class="NormalContent">
                                      The instruction can now be executed.
                                      Arithmetic and logical instructions are
                                      carried out using the Accumulator(s) in a
                                      CPU.
                                    </li>
                                    <li class="NormalContent">
                                      Signals are sent out to different parts of
                                      the CPU to execute the instruction ADD.
                                    </li>
                                    <li class="NormalContent">
                                      In our example, this will result in adding
                                      4500 to whatever is in the Accumulator,
                                      and then over-writing the contents of the
                                      Accumulator with the result of the
                                      addition.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p style="margin-bottom: 10px">
                                The way registers are used to run programs is
                                often known as the&nbsp;
                                <span class="NormalContentHeading">
                                  <em>FETCH - DECODE - EXECUTE cycle</em>
                                </span>
                                . This is because that is all the CPU actually
                                does. It fetches instructions, decodes them and
                                then executes them. It does this very quickly
                                indeed, but that is all it does. It is why you
                                sometimes read that computers aren't very
                                clever!
                                <span class="NormalContentHeading">
                                  <strong>&nbsp;</strong>
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

export default Registers_and_the_Fetch_Decode_Execute_cycle;