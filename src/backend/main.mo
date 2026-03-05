import Time "mo:core/Time";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type Lead = {
    id : Nat;
    name : Text;
    pageLink : Text;
    problemDescription : Text;
    submittedAt : Int;
  };

  module Lead {
    public func compareBySubmittedAt(lead1 : Lead, lead2 : Lead) : Order.Order {
      Int.compare(lead1.submittedAt, lead2.submittedAt);
    };
  };

  let leads = List.empty<Lead>();
  var nextLeadId = 1;

  public shared ({ caller }) func submitLead(name : Text, pageLink : Text, problemDescription : Text) : async Nat {
    let lead : Lead = {
      id = nextLeadId;
      name;
      pageLink;
      problemDescription;
      submittedAt = Time.now();
    };
    leads.add(lead);
    nextLeadId += 1;
    lead.id;
  };

  public query ({ caller }) func getLeads() : async [Lead] {
    leads.toArray();
  };

  public query ({ caller }) func getLeadCount() : async Nat {
    leads.size();
  };
};
