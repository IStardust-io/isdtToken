const ISDT = artifacts.require("Isdt");
const BigNumber = require("bignumber.js");

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

/**
 * 
 * 
 * test 결과 
 * 
*/
contract('BASIC TEST [GRAME]', async accounts => {
  const [host1, host2, creatorSTARDUST, judge1, judge2,
    judge3, bank, withdrawalWallet, tokenManager, burner] = accounts;


  const timeTravel = function (time) {
    return new Promise((resolve, reject) => {
      web3.currentProvider.send({
        jsonrpc: "2.0",
        method: "evm_increaseTime",
        params: [time], //86,400 is num seconds in day
        id: new Date().getTime()
      }, (err, result) => {
        if (err) { return reject(err) }
        return resolve(result)
      });
    })
  };

  const cal = function (amt) {
    let result = new BigNumber(amt).toNumber();
    return result;
  };
  const cal18 = function (amt) {
    let result = new BigNumber(amt).dividedBy(new BigNumber(10).pow(18)).toNumber();
    return result;
  };

  // describe('1. GETTER TEST', () => {
  //   //allowance 조회
  //   it("01. allowance", async () => {
  //     let isdt = await ISDT.deployed();
  //     let amt1 = 10000;
  //     await isdt.approve(host2, amt1, { from: host1 });

  //     let result = await isdt.allowance(host1, host2);
  //     result = cal(result);
  //     assert.equal(amt1, result, "is allowance true ? ");
  //   });

  //   it("02. balanceOf", async () => {
  //     let isdt = await ISDT.deployed();
  //     let totalBalance = 10000000000; //100억개
  //     let balance = await isdt.balanceOf(host1);
  //     balance = cal18(balance);
  //     assert.equal(totalBalance, balance);
  //   });

  //   it("03. burners", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isBurner = await isdt.burners(host1);

  //     assert.equal(isBurner, false);
  //   });

  //   it("04. chkBurnerList", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isBurner = await isdt.chkBurnerList(0);

  //     assert.equal(isBurner, false);
  //   });

  //   it("05. chkOwnerList", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isOwner = await isdt.chkOwnerList(0);

  //     assert.equal(isOwner, host1);
  //   });

  //   it("06. decimals", async() => {
  //     let isdt = await ISDT.deployed();
  //     let decimals = await isdt.decimals();

  //     assert.equal(decimals, 18);
  //   });

  //   it("07. depositWallet", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isDWallet = await isdt.depositWallet(host1);

  //     assert.equal(isDWallet, false);
  //   });

  //   it("08. granularity", async() => {
  //     let isdt = await ISDT.deployed();
  //     let granularity = await isdt.granularity();

  //     granularity = cal18(granularity);

  //     assert.equal(granularity, 1);
  //   });

  //   it("09. hiddenOwner", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isHiddenOwner = await isdt.hiddenOwner();

  //     assert.equal(isHiddenOwner, host1);
  //   });

  //   it("10. INITIAL_SUPPLY", async() => {
  //     let isdt = await ISDT.deployed();
  //     let initialSupply = await isdt.INITIAL_SUPPLY();

  //     initialSupply = cal18(initialSupply);

  //     assert.equal(initialSupply, 1e+10);
  //   });

  //   it("11. isburnlist", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isburnlist = await isdt.isburnlist(host1);

  //     assert.equal(isburnlist, false);
  //   });

  //   it("12. isPermitted", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isPermitted = await isdt.isPermitted(host1);

  //     assert.equal(isPermitted, true);
  //   });

  //   it("13. name", async() => {
  //     let isdt = await ISDT.deployed();
  //     let name = await isdt.name();
  //     assert.equal(name, "ISTARDUST");
  //   });

  //   it("14. owners", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isOwner = await isdt.owners(host1);
  //     assert.equal(isOwner, true);
  //   });

  //   it("15. paused", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isPaused = await isdt.paused();

  //     assert.equal(isPaused, false);
  //   });

  //   it("16. reclaimer", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isReclaimer = await isdt.reclaimer();

  //     assert.equal(isReclaimer, host1);

  //   });

  //   it("17. superOwner", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isSuperOwner = await isdt.superOwner();

  //     assert.equal(isSuperOwner, host1);
  //   });

  //   it("18. symbol", async() => {
  //     let isdt = await ISDT.deployed();
  //     let symbol = await isdt.symbol();

  //     assert.equal(symbol, "ISDT");
  //   });

  //   it("19. tokenManager", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isTManger = await isdt.tokenManager();
  //     let x0 = "0x0000000000000000000000000000000000000000";
  //     assert.equal(x0, isTManger);

  //   });

  //   it("20. totalSupply", async() => {
  //     let isdt = await ISDT.deployed();
  //     let _totalSupply = await isdt.totalSupply();
  //     _totalSupply = cal18(_totalSupply)
  //     assert.equal(_totalSupply, 1e+10);
  //   });

  //   it("21. withdrawalWallet", async() => {
  //     let isdt = await ISDT.deployed();
  //     let _withdrawalWallet = await isdt.withdrawalWallet();
  //     let x0 = "0x0000000000000000000000000000000000000000";
  //     assert.equal(x0, _withdrawalWallet);

  //   });

  //   it("22. chkJudgeList", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isJudge = await isdt.chkJudgeList(0);
  //     let x0 = "0x0000000000000000000000000000000000000000";
  //     assert.equal(x0, isJudge);
  //   });

  //   it("23. judges", async() => {
  //     let isdt = await ISDT.deployed();
  //     let isJudge = await isdt.judges(host1);

  //     assert.equal(isJudge, false);
  //   });
  // });

  describe('2. SETTER TEST', () => {
    //host1 addBurner
    it("1. addBurner", async () => {
      let isdt = await ISDT.deployed();
      //실행자가 수퍼오너가 아닌 경우
      await isdt.addBurner(burner, 0, { from: host2 }).should.be.rejected;

      await isdt.addBurner(burner, 0, { from: host1 }).should.be.fulfilled;

      let isBurner = await isdt.burners(burner);
      assert.equal(isBurner, true);

      isBurner = await isdt.chkBurnerList(0);
      assert.equal(isBurner, burner);
    });

    it("2. addBurnlist", async () => {
      let isdt = await ISDT.deployed();
      //실행자가 오너가 아닌 경우 : reject
      await isdt.addBurnlist(host1, { from: host2 }).should.be.rejected;

      await isdt.addBurnlist(host2, { from: host1 }).should.be.fulfilled;

    });

    // it("3. delBurnlist", async() => {
    //   let isdt = await ISDT.deployed();

    //   //실행자가 오너가 아닌 경우 : rejected
    //   await isdt.delBurnlist(host2, {from:host2}).should.be.rejected;

    //   //실행자가 오너이지만 _to의 대상이 번리스트에 등록되어있지 않은 경우 : rejected
    //   await isdt.delBurnlist(host3, {from:host1}).should.be.rejected;

    //   //성공
    //   await isdt.delBurnlist(host2, {from:host1}).should.be.fulfilled;
    // });

    //수퍼오너만 실행 가능
    //이미 오너인 경우 실행 안됨
    it("3. addOwner", async () => {
      let isdt = await ISDT.deployed();
      //수퍼오너가 아닌 계정이 실행시 : rejected
      await isdt.addOwner(host1, 1, { from: host2 }).should.be.rejected;

      await isdt.addOwner(host2, 1, { from: host1 }).should.be.fulfilled;
      //이미 오너인 경우 실행 안됨.
      await isdt.addOwner(host2, 2, { from: host1 }).should.be.rejected;
    });

    it("4. approve", async () => {
      let isdt = await ISDT.deployed();
      let amt1 = 100000;
      await isdt.approve(host2, amt1, { from: host1 });

      let result = await isdt.allowance(host1, host2);

      result = cal(result);

      assert.equal(result, amt1);
    });

    //onlyOwner require(!blacklisted[node])
    it("5. blacklist", async () => {
      let isdt = await ISDT.deployed();

      await isdt.blacklist(host1, { from: burner }).should.be.rejected;

      await isdt.blacklist(host1, { from: host2 }).should.be.fulfilled;
      //이미 블랙리스팅 되어있는 경우 실행이 불가능하다.
      await isdt.blacklist(host1, { from: host1 }).should.be.rejected;
    });

    //버너만 실행가능
    //_to는 번리스트 등록
    //번하려는 금액은 보유 금액보다 적거나 같아야한다.
    it("6. burn", async () => {
      let isdt = await ISDT.deployed();
      let flag = await isdt.burners(burner);
      assert.equal(flag, true);

      await isdt.addBurnlist(host1, { from: host1 }).should.be.fulfilled;
      await isdt.burn(host1, 100000, { from: burner }).should.be.fulfilled;
      await isdt.burn(host1, 100000, { from: host1 }).should.be.rejected;
    });

    it("7. changeHiddenOwner", async () => {
      let isdt = await ISDT.deployed();

      await isdt.changeHiddenOwnership(host2, { from: host2 }).should.be.rejected;

      await isdt.changeHiddenOwnership(host2, { from: host1 }).should.be.fulfilled;

      await isdt.changeHiddenOwnership(host1, { from: host2 }).should.be.fulfilled;

    });

    it("8. changeReclaimer", async () => {
      let isdt = await ISDT.deployed();

      await isdt.changeReclaimer(host2, { from: host2 }).should.be.rejected;
      await isdt.changeReclaimer(host2, { from: host1 }).should.be.fulfilled;
      await isdt.changeReclaimer(host1, { from: host1 }).should.be.fulfilled;
    });

    it("9. changeSuperOwner", async () => {
      let isdt = await ISDT.deployed();

      await isdt.changeSuperOwnership(host2, { from: host2 }).should.be.rejected;
      await isdt.changeSuperOwnership(host2, { from: host1 }).should.be.fulfilled;
      await isdt.changeSuperOwnership(host1, { from: host1 }).should.be.fulfilled;
    });

    it("10. decreaseApproval", async () => {
      let isdt = await ISDT.deployed();
      await isdt.approve(host2, 1000000, { from: host1 });
      let amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[before]: ', amount);

      await isdt.decreaseApproval(host2, 55000);

      amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[after]: ', amount);

    });

    it("11. increaseApproval", async () => {
      let isdt = await ISDT.deployed();

      let amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[before]: ', amount);

      await isdt.increaseApproval(host2, 55000);

      amount = await isdt.allowance(host1, host2);

      amount = cal(amount);
      console.log('amount[after]: ', amount);

    });

    it("12. delDepositWallet", async () => {
      let isdt = await ISDT.deployed();

      let isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, false);

      await isdt.transferTokenManagerRole(tokenManager, { from: host1 }).should.be.fulfilled;

      await isdt.setDepositWallet(creatorSTARDUST, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, true);

      await isdt.delDepositWallet(creatorSTARDUST, { from: host1 }).should.be.rejected;

      await isdt.delDepositWallet(creatorSTARDUST, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, false);
    });

    it("13. deleteBurner", async () => {
      let isdt = await ISDT.deployed();
      let flag = await isdt.burners(burner);
      assert.equal(flag, true);

      await isdt.deleteBurner(burner, 0, { from: host2 }).should.be.rejected;
      await isdt.deleteBurner(burner, 1, { from: host1 }).should.be.rejected;
      await isdt.deleteBurner(tokenManager, 0, { from: host1 }).should.be.rejected;

      await isdt.deleteBurner(burner, 0, { from: host1 }).should.be.fulfilled;

      flag = await isdt.burners(burner);
      assert.equal(flag, false);
    });


    it("14. deleteOwner", async () => {
      let isdt = await ISDT.deployed();
      let isOwner = await isdt.owners(host1);
      assert.equal(isOwner, true);
      await isdt.deleteOwner(host1, 0, { from: host1 }).should.be.fulfilled;

      isOwner = await isdt.owners(host1);
      assert.equal(isOwner, false);

      await isdt.addOwner(host1, 0, { from: host1 });

      isOwner = await isdt.owners(host1);
      assert.equal(isOwner, true);
    });

    it("15. delBurnlist", async () => {
      let isdt = await ISDT.deployed();
      let isBurnlist = await isdt.isburnlist(host1);

      assert.equal(isBurnlist, true);

      await isdt.delBurnlist(host1, { from: tokenManager }).should.be.rejected;

      await isdt.delBurnlist(host1, { from: host1 }).should.be.fulfilled;

      await isdt.delBurnlist(host1, { from: host1 }).should.be.rejected;
    });

    //따로 진행
    it("16. mint", async () => {
      let isdt = await ISDT.deployed();
    });

    it("17. pause", async () => {
      let isdt = await ISDT.deployed();

      let isPaused = await isdt.paused();

      assert.equal(isPaused, false);

      await isdt.pause();
      isPaused = await isdt.paused();
      assert.equal(isPaused, true);


    });
    //따로 진행
    it("18. reclaimToken", async () => {

    });

    it("19. setDepositWallet", async () => {
      let isdt = await ISDT.deployed();

      await isdt.setDepositWallet(burner, { from: tokenManager }).should.be.fulfilled;
      let isDW = await isdt.depositWallet(burner);
      assert.equal(isDW, true);

      await isdt.delDepositWallet(burner, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(burner);

      assert.equal(isDW, false);

      await isdt.setDepositWallet(creatorSTARDUST, { from: tokenManager }).should.be.fulfilled;

      isDW = await isdt.depositWallet(creatorSTARDUST);

      assert.equal(isDW, true);


    });

    it("20. transfer", async () => {

    });

    it("21. transferFrom", async () => {

    });

    it("22. transferWithdrawalWallet", async () => {

    });

    it("23. unblacklist", async () => {

    });

    it("24. unpause", async () => {

    });

    it("25. vacuumCleaner", async () => {

    });

    it("26. withdraw", async () => {

    });

    it("27. addJudge", async () => {

    });

    it("28. deleteJudge", async () => {

    });

    it("29. agree", async () => {

    });

    it("30. disagree", async () => {

    });

    it("31. transferBankOwnership", async () => {

    });

    it("32. withdrawFromBank", async () => {

    });

    it("33. transferTokenManagerRole", async () => {

    });

    it("34. destory", async () => {

    });



  });
});