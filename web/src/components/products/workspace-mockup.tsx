import {
  ArrowRightIcon,
  CheckIcon,
  EllipsisIcon,
  LoaderCircleIcon,
  ShieldCheckIcon,
  TablePropertiesIcon,
  WorkflowIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

/** Product screenshot frame used across the Loan Origination page. */
export function WorkspaceMockup({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-[#d8dee8] bg-white shadow-[0px_16px_36px_0px_rgba(17,24,39,0.09)]",
        className
      )}
    >
      <div className="flex h-11 shrink-0 items-center justify-between bg-[#0d1422] px-3.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/window-controls.svg" alt="" width={33} height={7} />
        <p className="text-[9px] font-medium text-[#c9d2e1]">
          THINKERFINT · LENDING WORKSPACE
        </p>
        <EllipsisIcon className="size-4 text-[#c9d2e1]" />
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="flex w-[54px] shrink-0 flex-col gap-4 bg-[#151f31] px-3 pt-4">
          <WorkflowIcon className="size-5 text-[#4bd5d8]" />
          <TablePropertiesIcon className="size-5 text-[#8290a8]" />
          <ShieldCheckIcon className="size-5 text-[#8290a8]" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-3 bg-[#f7f9fc] p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

function FlowNode({
  label,
  title,
  className,
  labelClassName,
}: {
  label: string
  title: string
  className?: string
  labelClassName?: string
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-[5px] rounded-lg border p-3 font-medium",
        className
      )}
    >
      <p className={cn("text-[8px] uppercase", labelClassName)}>{label}</p>
      <p className="text-[10px] text-[#111827]">{title}</p>
    </div>
  )
}

export function WorkflowCanvas() {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold text-[#111827]">
          Personal loan · v12
        </p>
        <span className="rounded-full bg-[#e6f8f7] px-2 py-[5px] text-[10px] font-medium text-[#087f89]">
          Live
        </span>
      </div>
      <div className="flex items-center gap-3.5">
        <FlowNode
          label="Trigger"
          title="Application received"
          className="border-[#d8dee8] bg-white"
          labelClassName="text-[#60708b]"
        />
        <ArrowRightIcon className="size-4 shrink-0 text-[#6d35f2]" />
        <FlowNode
          label="Decision"
          title="Eligibility policy"
          className="border-[#6d35f2] bg-[#eee9ff]"
          labelClassName="text-[#6d35f2]"
        />
      </div>
      <div className="flex justify-between px-[72px]">
        <span className="h-6 w-px bg-[#d8dee8]" />
        <span className="h-6 w-px bg-[#d8dee8]" />
      </div>
      <div className="flex gap-4">
        <FlowNode
          label="Yes · 68%"
          title="KYC & scorecard"
          className="border-[#087f89] bg-[#e6f8f7]"
          labelClassName="text-[#087f89]"
        />
        <FlowNode
          label="No · 32%"
          title="Manual review"
          className="border-[#d96a56] bg-[#fff4f2]"
          labelClassName="text-[#b64936]"
        />
      </div>
    </>
  )
}

const scoreRules = [
  { label: "Credit bureau score", value: "+280", width: "34%" },
  { label: "Debt-to-income", value: "+190", width: "27%" },
  { label: "Income stability", value: "+172", width: "24%" },
  { label: "Policy adjustments", value: "+140", width: "20%" },
]

export function DecisionScorecard() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between rounded-lg bg-[#111827] p-3.5">
        <div className="flex flex-col gap-[3px]">
          <p className="text-[10px] font-medium text-[#aab5c8]">
            Decision score
          </p>
          <p className="text-[28px] font-bold text-white">782</p>
        </div>
        <span className="rounded-full bg-[#4bd5d8] px-2.5 py-1.5 text-[10px] font-medium text-[#111827]">
          Approve
        </span>
      </div>
      {scoreRules.map((rule) => (
        <div
          key={rule.label}
          className="flex flex-col gap-[7px] rounded-lg border border-[#d8dee8] bg-white p-2.5"
        >
          <div className="flex justify-between text-[10px] font-medium">
            <p className="text-[#111827]">{rule.label}</p>
            <p className="text-[#6d35f2]">{rule.value}</p>
          </div>
          <div className="h-[5px] rounded-full bg-[#eee9ff]">
            <div
              className="h-[5px] rounded-full bg-[#6d35f2]"
              style={{ width: rule.width }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const complianceChecks = [
  { label: "Identity verification", done: true },
  { label: "Sanctions screening", done: true },
  { label: "PEP screening", done: true },
  { label: "Document authenticity", done: false },
]

export function ComplianceChecks() {
  return (
    <>
      <div className="flex items-center justify-between rounded-lg border border-[#d8dee8] bg-white p-3">
        <div className="flex flex-col gap-[3px]">
          <p className="text-[13px] font-bold text-[#111827]">
            Ploy Chantarangsu
          </p>
          <p className="text-[9px] font-medium text-[#60708b]">
            Application TH-20481
          </p>
        </div>
        <span className="rounded-full bg-[#e6f8f7] px-2 py-[5px] text-[10px] font-medium text-[#087f89]">
          Checks running
        </span>
      </div>
      {complianceChecks.map((check) => (
        <div
          key={check.label}
          className="flex items-center justify-between rounded-lg border border-[#d8dee8] bg-white px-3 py-2.5"
        >
          <div className="flex items-center gap-[9px]">
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full",
                check.done ? "bg-[#e6f8f7]" : "bg-[#eee9ff]"
              )}
            >
              {check.done ? (
                <CheckIcon className="size-3 text-[#087f89]" />
              ) : (
                <LoaderCircleIcon className="size-3 text-[#6d35f2]" />
              )}
            </span>
            <p className="text-[10px] font-medium text-[#111827]">
              {check.label}
            </p>
          </div>
          <p
            className={cn(
              "text-[9px] font-medium",
              check.done ? "text-[#147d64]" : "text-[#6d35f2]"
            )}
          >
            {check.done ? "Passed" : "In progress"}
          </p>
        </div>
      ))}
    </>
  )
}

const tasks = [
  { title: "Income verification", owner: "Somchai K.", age: "18 min", late: false },
  { title: "Employer call", owner: "Narin P.", age: "32 min", late: false },
  { title: "Document review", owner: "Unassigned", age: "41 min", late: true },
  { title: "Address verification", owner: "Anya S.", age: "54 min", late: true },
]

export function TaskQueue() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold text-[#111827]">
          Verification task pool
        </p>
        <span className="rounded-lg bg-[#fff1d6] px-2 py-[5px] text-[10px] font-medium text-[#7a4b00]">
          6 nearing SLA
        </span>
      </div>
      {tasks.map((task) => (
        <div
          key={task.title}
          className="flex items-center gap-2.5 rounded-lg border border-[#d8dee8] bg-white p-2.5"
        >
          <span
            className={cn(
              "h-7 w-1.5 rounded-full",
              task.late ? "bg-[#f4a340]" : "bg-[#4bd5d8]"
            )}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 font-medium">
            <p className="text-[10px] text-[#111827]">{task.title}</p>
            <p className="text-[9px] text-[#60708b]">{task.owner}</p>
          </div>
          <p
            className={cn(
              "text-[10px] font-medium",
              task.late ? "text-[#7a4b00]" : "text-[#087f89]"
            )}
          >
            {task.age}
          </p>
        </div>
      ))}
    </div>
  )
}
