# Mips CPU

---

During my _CprE 381: Computer architecture_ class I created multiple Mips CPUs
in VHDL. Unfortunately I cannot show the source code because I do not want to
make it too easy for future students in the class in case the stumbled across
this page :). It was also a rushed group project, so I can assure you that
reading the code would be very painful anyways.

## Single Cycle

Initially we created a single cycle CPU. It was pretty simple in comparison to
what we did later in the class. It was able to run all of the standard MIPS
instructions, and it successfully ran a topological sort and a bunch of other
tests.

## Pipelined

Later in the class we created a pipelined version of the CPU. It was a standard
5 stage pipeline. Nothing particularly advanced. At this stage, we didn't have
caches, so there wasn't much point to making a pipeline much longer anyways. It
ran about twice as fast as the since cycle processor.
