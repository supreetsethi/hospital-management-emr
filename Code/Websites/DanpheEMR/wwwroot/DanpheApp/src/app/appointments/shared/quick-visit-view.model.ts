import { BillingTransaction } from "../../billing/shared/billing-transaction.model";
import { Patient } from "../../patients/shared/patient.model";
import { PatientCareTaker_DTO } from "./dto/patient-caretaker.dto";
import { Visit } from "./visit.model";
export class QuickVisitVM {
  public Patient: Patient = new Patient();
  public Visit: Visit = new Visit();
  public BillingTransaction: BillingTransaction = new BillingTransaction();
  public CareTaker = new PatientCareTaker_DTO();
}

export class VisitBillItemVM {
  public DepartmentId: number = null;
  // public ProviderId: number = null;
  // public ProviderName: string = null;
  public PerformerId: number = null; //Krishna, 15th,jun'22, changed ProviderId to PerformerId.
  public PerformerName: string = null; // Krishna, 15th,jun'22, changed ProviderName to PerformerName.
  public ItemName: string = null;
  public ItemId: number = null;//sud:19June'19
  public ServiceDepartmentId: number = null;//sud:19June'19
  public ServiceDepartmentName: string = null;//sud:19June'19
  public Price: number = null;
  public IsTaxApplicable: boolean = false;
  public HasAdditionalBillingItems: boolean = false;
  public NormalPrice: number = null;
  public SAARCCitizenPrice: number = null;
  public ForeignerPrice: number = null;
  public InsForeignerPrice: number = null;
  public EHSPrice: number = null;//sud:19June'19
  public PriceCategory: string = null;
}

//sud: 24June'19--for futuree use, remove it if not used.
export class ListVisitsVM {

  public PatientVisitId: number = 0;
  public ParentVisitId: number = 0;
  public DepartmentId: number = 0;
  public DepartmentName: string = null;
  // public ProviderId: number = 0;
  // public ProviderName: string = null;
  public PerformerId: number = null; // Krishna, 16th,jun'22, changed ProviderId to PerformerId.
  public PerformerName: string = null; // Krishna, 16th,jun'22, changed ProviderName to PerformerName.
  public CreatedOn: string = null;
  public VisitDate: string = null;
  public VisitTime: string = null;

  public PatientId: number = 0;
  public PatientCode: string = null;
  public ShortName: string = null;
  public PhoneNumber: string = null;
  public DateOfBirth: string = null;
  public Gender: string = null;
  public VisitType: string = null;
  public AppointmentType: string = null;
  public BillStatus: string = null;
  public Patient: Patient = null;
  public BillingTransaction: BillingTransaction = null;
  public InvoiceNo: number = 0;
  public BillingTransactionId: number = 0;
  public BillingFiscalYearId: number = 0;
}
